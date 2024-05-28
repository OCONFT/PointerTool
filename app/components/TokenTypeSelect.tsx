"use client";
import { NFTPointerForm } from "./NFTPointerForm";
import { useState } from "react";
import { TokenPointerForm } from "./TokenPointerForm";
import { TokenFactoryPointerForm } from "./TokenFactoryPointerForm";
import { TokenStandard } from "@/models/tokenStandard";

export function TokenTypeSelect() {
  const [tokenStandard, setTokenStandard] = useState<TokenStandard>(TokenStandard.NFT);

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="form-control w-full col-span-full">
          <div className="label">
            <span className="label-text font-semibold text-accent">Token Type</span>
          </div>

          <select
            className="select select-bordered w-full select-secondary"
            value={tokenStandard}
            onChange={(e) => setTokenStandard(e.target.value as TokenStandard)}
          >
            <option value={TokenStandard.NFT}>{TokenStandard.NFT}</option>
            <option value={TokenStandard.Token}>{TokenStandard.Token}</option>
            <option value={TokenStandard.TokenFactory}>{TokenStandard.TokenFactory}</option>
          </select>
        </div>
      </div>

      {tokenStandard === TokenStandard.NFT && <NFTPointerForm />}
      {tokenStandard === TokenStandard.TokenFactory && <TokenFactoryPointerForm />}
      {tokenStandard === TokenStandard.Token && <TokenPointerForm />}
    </>
  );
}
