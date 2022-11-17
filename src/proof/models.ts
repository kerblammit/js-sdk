import { CircuitId } from './../circuits/models';
export interface ProofRequest {
  id: number;
  //toDO: verify with Vlad is challenge could belong to this interface
  challenge: number;
  circuitId: CircuitId;
  optional?: boolean;
  rules: { [key: string]: unknown };
}

// ZKProof is structure that represents SnarkJS library result of proof generation
export interface ZKProof {
  pi_a: string[];
  pi_b: string[][];
  pi_c: string[];
  protocol: string;
}

// FullProof is ZKP proof with public signals
export interface FullProof {
  proof: ZKProof;
  pubSignals: string[];
}
