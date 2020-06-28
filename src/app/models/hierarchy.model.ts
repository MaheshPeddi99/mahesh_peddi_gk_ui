export interface HierarchyNode {
  nodeId: string;
  resource: string;
  resourceType: string;
  locationType: string;
  displayName: string;
  deviceId: number;
  children: HierarchyNode[];
}

export interface HierarchyWrapper {
  status: number;
  entity: { nodeStandardMetadata: HierarchyNode };
  callerID: string;
}

export interface HierarchyNode {
  nodeId: string;
  resource: string;
  resourceType: string;
  locationType: string;
  displayName: string;
  deviceId: number;
  children: HierarchyNode[];
}