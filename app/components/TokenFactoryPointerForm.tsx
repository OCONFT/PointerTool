"use client";

import { useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import { useToast } from "@/components/ui/use-toast";
import detectEthereumProvider from "@metamask/detect-provider";
import {
  EVM_POINTER_ABI,
  EVM_POINTER_PRECOMPILE_ADDRESS,
  EVM_POINTER_VIEW_ABI,
  EVM_POINTER_VIEW_PRECOMPILE_ADDRESS,
} from "@/app/pointerConfig";

interface CompassProvider {
  isCompass?: boolean;
}

export function TokenFactoryPointerForm() {
  const { toast } = useToast();
  const [buildingPointer, setBuildingPointer] = useState(false);
  const [deployedAddress, setDeployedAddress] = useState<string>("");
  const [denom, setDenom] = useState<string>("");

  const handleError = (message: string) => {
    setBuildingPointer(false);
    toast({
      title: message,
      variant: "destructive",
    });
  };

  const handleSuccess = (message: string, address: string) => {
    setDeployedAddress(address);
    toast({
      title: message,
    });
    setBuildingPointer(false);
  };

  const buildPointer = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBuildingPointer(true);

    if (!window.ethereum) {
      handleError("Metamask not detected");
      return;
    }

    try {
      const detectedProvider = (await detectEthereumProvider()) as CompassProvider | null;
      if (detectedProvider?.isCompass) {
        handleError("Compass installed, turn it off to use Metamask");
        return;
      }

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const viewContract = new Contract(EVM_POINTER_VIEW_PRECOMPILE_ADDRESS, EVM_POINTER_VIEW_ABI, signer);
      const viewResponse = await viewContract.getNativePointer(denom);
      const pointerExists = viewResponse["2"];

      if (pointerExists) {
        const pointerAddress = viewResponse["0"];
        handleSuccess("Pointer already exists", pointerAddress);
        return;
      }

      const contract = new Contract(EVM_POINTER_PRECOMPILE_ADDRESS, EVM_POINTER_ABI, signer);
      const executeResponse = await contract.addNativePointer(denom);

      await executeResponse.wait();

      const viewResponsePostDeploy = await viewContract.getNativePointer(denom);
      const pointerFound = viewResponsePostDeploy["2"];

      if (pointerFound) {
        const pointerAddress = viewResponsePostDeploy["0"];
        handleSuccess("Pointer deployed", pointerAddress);
      } else {
        handleError("Error deploying contract");
      }
    } catch (error) {
      console.error(error);
      handleError("Error deploying contract");
    }
  };

  return (
    <>
      <div className="w-full flex flex-col">
        <form onSubmit={buildPointer}>
          <div className="form-control w-full col-span-full">
            <div className="label">
              <span className="label-text font-semibold text-accent">Token</span>
            </div>

            <input
              type="text"
              name="tokenDenom"
              className="input input-secondary w-full"
              value={denom}
              onChange={(e) => setDenom(e.target.value)}
              placeholder="factory/$ACCOUNT/$DENOM"
              required
            />
          </div>

          <div className="col-span-full w-full flex justify-center">
            {buildingPointer && (
              <button type="button" className="btn btn-primary btn-outline mt-4 btn-wide">
                Deploying...
                <span className="loading loading-spinner loading-xs"></span>
              </button>
            )}
            {!buildingPointer && (
              <button type="submit" className="btn btn-primary btn-outline mt-4 btn-wide">
                Deploy
              </button>
            )}
          </div>

          {deployedAddress && <p className="text-success text-center my-2">Deployed: {deployedAddress}</p>}
        </form>
      </div>
    </>
  );
}
