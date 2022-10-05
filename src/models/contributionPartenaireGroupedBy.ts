import { ContributionPartenaireI } from "./contributionPartenaire";

export interface ContributionPartenaireGroupedByI {
    nameProjet: string;
    listContributionPartenaire: ContributionPartenaireI[];
    isShowBtnEdit?: boolean;
}