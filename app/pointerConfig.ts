export const WASM_PRECOMPILE_ADDRESS = "0x0000000000000000000000000000000000001002";
export const ADDRESS_LOOKUP_PRECOMPILE_ADDRESS = "0x0000000000000000000000000000000000001004";
export const EVM_POINTER_PRECOMPILE_ADDRESS = "0x000000000000000000000000000000000000100b";

export const WASM_PRECOMPILE_ABI = [
  {
    inputs: [
      { internalType: "string", name: "contractAddress", type: "string" },
      { internalType: "bytes", name: "msg", type: "bytes" },
      { internalType: "bytes", name: "coins", type: "bytes" },
    ],
    name: "execute",
    outputs: [{ internalType: "bytes", name: "response", type: "bytes" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "string", name: "contractAddress", type: "string" },
          { internalType: "bytes", name: "msg", type: "bytes" },
          { internalType: "bytes", name: "coins", type: "bytes" },
        ],
        internalType: "struct IWasmd.ExecuteMsg[]",
        name: "executeMsgs",
        type: "tuple[]",
      },
    ],
    name: "execute_batch",
    outputs: [{ internalType: "bytes[]", name: "responses", type: "bytes[]" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint64", name: "codeID", type: "uint64" },
      { internalType: "string", name: "admin", type: "string" },
      { internalType: "bytes", name: "msg", type: "bytes" },
      { internalType: "string", name: "label", type: "string" },
      { internalType: "bytes", name: "coins", type: "bytes" },
    ],
    name: "instantiate",
    outputs: [
      { internalType: "string", name: "contractAddr", type: "string" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "contractAddress", type: "string" },
      { internalType: "bytes", name: "req", type: "bytes" },
    ],
    name: "query",
    outputs: [{ internalType: "bytes", name: "response", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
];

export const EVM_POINTER_ABI = [
  {
    inputs: [{ internalType: "string", name: "cwAddr", type: "string" }],
    name: "addCW20Pointer",
    outputs: [{ internalType: "address", name: "ret", type: "address" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "cwAddr", type: "string" }],
    name: "addCW721Pointer",
    outputs: [{ internalType: "address", name: "ret", type: "address" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "token", type: "string" }],
    name: "addNativePointer",
    outputs: [{ internalType: "address", name: "ret", type: "address" }],
    stateMutability: "payable",
    type: "function",
  },
];

export const EVM_POINTER_VIEW_ABI = [
  {
    inputs: [{ internalType: "string", name: "cwAddr", type: "string" }],
    name: "getCW20Pointer",
    outputs: [
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "uint16", name: "version", type: "uint16" },
      { internalType: "bool", name: "exists", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "cwAddr", type: "string" }],
    name: "getCW721Pointer",
    outputs: [
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "uint16", name: "version", type: "uint16" },
      { internalType: "bool", name: "exists", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "token", type: "string" }],
    name: "getNativePointer",
    outputs: [
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "uint16", name: "version", type: "uint16" },
      { internalType: "bool", name: "exists", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const EVM_POINTER_VIEW_PRECOMPILE_ADDRESS = "0x000000000000000000000000000000000000100A";

export const ADDRESS_LOOKUP_ABI = [
  {
    inputs: [{ internalType: "string", name: "addr", type: "string" }],
    name: "getEvmAddr",
    outputs: [{ internalType: "address", name: "response", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "getSeiAddr",
    outputs: [{ internalType: "string", name: "response", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];
