import { Instance, types } from "mobx-state-tree";

export const TeamModel = types.string;

export type Team = Instance<typeof TeamModel>;
