import { TokenTypeSelect } from "./components/TokenTypeSelect";

export const revalidate = 5;

export default async function Home() {
  return (
    <section className="w-full py-12 grow">
      <div className="container gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <div className="flex flex-col text-center sm:text-left">
              <div className="indicator">
                <span className="indicator-item badge badge-success">V2</span>
                <h2 className="text-6xl font-bold tracking-tighter text-primary">EVM Pointer Tool</h2>
              </div>

              <p className="my-2 text-secondary text-lg">
                Deploy an EVM Pointer for your CW-721, CW-20 or Token Factory Tokens
              </p>
            </div>
          </div>

          <div role="alert" className="alert alert-info">
            <span>You must have Metamask installed and enabled to use this tool.</span>
          </div>

          <TokenTypeSelect />
        </div>
      </div>
    </section>
  );
}
