import { Service } from "../models/service";
import { NavigationConstants } from ".";
import { Region } from "../models/region";
import { Convention } from "../models/convention";
import { TypeConvention } from "../models/typeConvention";
import { ContexteConvention } from "../models/contexteConvention";
import { DimensionRoyale } from "../models/dimensionRoyale";
import { IntituleConvention } from "../models/intituleConvention";
import { Secteur } from "../models/secteur";
import { TypeEngagementI } from "../models/typeEngagement";
import { DipositifFinancementI } from "../models/dipositifFinancement";
import { ModeDeblocageI } from "../models/modeDeblocage";
import { TypeModeGouvernanceI } from "../models/typeModeGouvernance";
import { FrequenceI } from "../models/frequence";
import { ComiteItemI } from "../models/comiteItem";
import { ProjetI } from "../models/projet";
import { EngagementFinancierI } from "../models/engagementFinancier";
import { ModeGouvernanceItemConsulterConvI } from "../models/modeGouvernanceItemConsulterConv";
import { EtatAvancementProjetI } from "../models/etatAvancementProjet";
import { RemarqueConsulterConvI } from "../models/remarqueConsulterConv";
import { HistoriqueRemarqueI } from "../models/historiqueRemarque";
import { ItemProjetConsulterConvI } from "../models/itemProjetConsulterConv";
import { AxeDeconcentrationI } from "../models/axeDeconcentration";
import { PermissionBySectorI } from "../models/permisionBySector";
import { OperationI } from "../models/operation";
import { DiffusionRhItemI } from "../models/diffusionRhItem";
import { DiffusionRessourcesMateriellesI } from "../models/diffusionRessourcesMaterielles";
import { IndicatorBySectorI } from "../models/indicatorBySector";
import { UniteMesureByButI } from "../models/uniteMesureByBut";
import { ContributionFinanciereMICProjetsI } from "../models/contributionFinanciereMICProjets";
import { ItemListProjetIFiltredI, ItemProjetI } from "../models/itemListProjetFiltred";
import { ProvinceI } from "../models/province";
import { ContributionPartenaireI } from "../models/contributionPartenaire";
import { EngagementFinancierConvRegionaleSpecifiqueI } from "../models/engagementFinancierConvRegionaleSpecifique";
import { AutreEngagementConvRegionaleSpecifiqueI } from "../models/autreEngagementConvRegionaleSpecifique";
import { TypeModificationConvAvenantI } from "../models/typeModificationConvAvenant";
import { TypeEngagementFinancierConvAvenantI } from "../models/typeEngagementFinancierConvAvenant";
import { AnneeOperationI } from "../models/anneeOperation";
import { StatutOperationI } from "../models/statutOperation";




export const LIST_SERVICE: Service[] = [
    { id: 0, name: "Stratégies nationales", icon: require("../assets/svg/strategies-nationales.svg").default, root: NavigationConstants.STRATEGIES_NATIONALES_PAGE },
    { id: 1, name: "Partenariat", icon: require("../assets/svg/partenariat.svg").default, root: NavigationConstants.PARTENARIAT_PAGE },
    { id: 2, name: "Contractualisation avec les services déconcentrés", icon: require("../assets/svg/contractulisation.svg").default, root: NavigationConstants.CONTRACTUALISATION_PAGE },
    { id: 3, name: "Déconcentration Administrative du Ministère", icon: require("../assets/svg/deconcentration.svg").default, root: NavigationConstants.DECONCENTRATION_PAGE },
    { id: 4, name: "Actualités", icon: require("../assets/svg/actualite.svg").default, root: NavigationConstants.ACTUALITES_PAGE },
    { id: 5, name: "Aide", icon: require("../assets/svg/aide.svg").default, root: NavigationConstants.AIDE_PAGE },
    { id: 6, name: "Foire aux questions", icon: require("../assets/svg/foire.svg").default, root: NavigationConstants.FOIRE_PAGE },
    { id: 7, name: "Tableaux de bord", icon: require("../assets/svg/tableau.svg").default, root: NavigationConstants.TABLEAUX_BORD_PAGE },
];



export const LIST_REGION: Region[] = [
    {
        id: "12",
        d: "m4310 16185 99 50c121-23 140 83 180 174 50 113 82 70 150 1 63-63 94 49 154 20 64-30 68-2 120-13 92-19 77-72 187-48 85 19 159 94 249 105 108 12 210 150 321 67 62-47 137-163 228-146 161 31 278 48 449 48 134 0 296 122 428 162 119 34 204-29 319-62 103-30 204 39 301 39v1094c-56 40-161 54-229 80-104 40-169 126-293 126-54 0-130 19-174 50-66 72-201 146-286 199-68 43-154 93-210 150-39 39-17 54-15 100 3 54-19 107-61 143l80 247 62 579 25 862H2044l-40 162-67 277-15 151c-1 14-1 6-3-3-10-49-23-113-11-159 60-227 55-484 88-724 20-44 24-139 24-188 0-117 79-179 114-288 39-118 57-251 173-321 42-34 13-82 67-32 37 34 166-33 186-74 34-72 15-143 68-212 36-46 74-39 88-106 13-63-7-156 38-208 16-19 33-41 22-65-21-42 18-56 45-80 80-24 154-129 99-206-17-2-29-10-50-10-2-2 87-112 100-139 19-42 25-85 43-127 24-58 79-94 111-152l103-191c28-49 46-102 75-152 17-29 140-118 114-157-25-38-33-98-77-44-28 34-198 308-227 308 0-72 155-267 207-319 54-54 112-92 173-135 85-61 128-172 203-247 72-82 144-146 233-211 61-44 107-116 170-165 38-29 97-50 122-93 22-37 2-48 58-67 10-3 21-22 32-51z",
        name: "Dakhla-Oued Eddahab",
        nameAr: "الداخلة - واد الذهب"
    },
    {
        id: "11",
        d: "m4310 16185 99 50c121-23 140 83 180 174 50 113 82 70 150 1 63-63 94 49 154 20 64-30 68-2 120-13 92-19 77-72 187-48 85 19 159 94 249 105 108 12 210 150 321 67 62-47 137-163 228-146 161 31 278 48 449 48 134 0 296 122 428 162 119 34 204-29 319-62 103-30 204 39 301 39v-1975h3669v-966l-164-7-172-74-347-545c-53-109-195 27-248 21-109-14-250-20-324-114-48-61-89-171-143-217-37-32-38-5-76 0-164 69-214-24-306-149-105-142-265-9-388-35-36-7-55-42-97-42l-299-3c-79-1-182-12-258 8-35 9-66 57-97 51-30-6-92-65-117-85l-7-1c-97-48-205 21-288-41-51-38-87-203-111-266-22-56-83-86-100-140l-18-103c-51 18-99 58-144 85-84 51-217 77-314 93-205 33-526 31-697 155-48 86-87 195-175 247-74 44-89 97-112 179-42 154-114 377-216 498l-46 223c-14 67-57 128-75 194-45 158-132 171-252 262l-208 158c-56 41-135 86-207 77-58-7-70 2-92 60-49 129-187 93-240 195-21 40-93 93-88 128 6 38-3 80-5 117-6 133-64 201-126 310-44 125-83 311-164 414-67 86-80 255-64 358 8 53 37 171 13 218-2 34-44 222-82 315z",
        name: "Laâyoune-Sakia El Hamra",
        nameAr: "العيون - الساقية الحمراء"
    },
    {
        id: "10",
        d: "m9668 10111 29 84c27 55 24 61 76 9 49-48 33-27 43 32 8 50 38 182 111 141 33-19 123-117 151-39 26 71 55 27 94-4 37-30 55-48 72 5 31 97 57-51 86 21 27 69 44-64 72-68 2 0 6-2 8 0 8-6 77 5 89 7 53 10 83 52 111 93 32 46 28 104 44 154 14 45 56 78 66 122 12 55 9 65-42 84-34 13 5 50-9 72-23 37-106 14-119 59-15 52 27 74 55 106 3 16-14 72 3 73 11 1 75-15 70 1-14 44-52 107-35 153 12 31 13 82 55 64 63-27 13 71 69 102 45 25 111 12 111 78 14 152 206 283 284 407v1775l-164-7-172-74-347-545c-53-109-195 27-248 21-109-14-250-20-324-114-48-61-89-171-143-217-37-32-38-5-76 0-164 69-214-24-306-149-105-142-265-9-388-35-36-7-55-42-97-42l-299-3c-79-1-182-12-258 8-35 9-66 57-97 51-30-6-92-65-117-85l-7-1c-97-48-205 21-288-41-51-38-87-203-111-266-22-56-83-86-100-140l-18-103c4-1 8-3 12-4 32-9 111-18 129-48 99-66 262-76 348-167 102-107 182-276 308-351 74-44 110-134 182-166 97-43 194-93 282-154 85-25 225-102 282-168 53-62 89-138 135-207 38-57 93-67 139-111 112-107 175-279 248-413z",
        name: "Guelmim-Oued Noun",
        nameAr: "كلميم واد نون"
    },
    {
        id: "9",
        d: "m12276 8137-79 53c-12 15-37 36-33 58 6 32 21 20 48 30 28 11-19 56-11 93 12 49-23 153 48 156 93 4 39 51 1 93-10 12-34 64-10 71 27 8 67-15 94-1 6 3-1 18-1 24 0 42 43 107 69 138 21 26 67 54 55 93-9 30-57-1-75 17-32 32-1 81-79 81-33 0-88-4-69 48 8 22 6 54 20 73 19 26 49-44 86 44 26 62 28 68 1 127-34 73 42 46 82 41 60-8 56 61 91 61s43-27 85-8c15 7 98 104 101 60 2-44-59-81-21-121 56-59 85-108 116-186 40-100 64-24 122 18 34 33 65 74 108 32 53-53 69-27 125-14 38 9 20-85 21-104 6-64 26-19 55-19 36 0 171-93 184-69 24 47-34 113 56 113 41 0 168 45 129 107-33 54-100 69-100 143 24 29 25 44 59 69 24 18-27 103-11 147 21 60 67-24 104-14 96 25 81 48 19 110-51 51-91 61-63 139 69 78-74 105-34 148 41 44 88 99 57 168l-23-1c-62-3-67 94-133 65-62-27-187 5-210 74-71 0-134-56-198-51-47-4-144 10-158-45-82 0-195 114-257 156-104 70-200 58-322 58 0 2 1 2-1 2 0 96-64 87-134 116-84 35-90 89-178 107-18 28-41 43-60 78-18 33-21 24-60 28-57 6-108 71-142 111-51 60-59 8-91 28-24 15-28 48-55 55-32 8-157 128-180 156-74 92-166 94-260 149v623c-77-123-269-254-284-407 0-66-65-53-111-78-56-31-5-129-69-102-42 18-44-34-55-64-17-46 20-109 35-153 5-15-59 0-70-1-17-1 0-57-3-73-28-32-69-54-55-106 13-45 95-22 119-59 14-22-25-59 9-72 50-19 53-29 42-84-9-44-51-78-66-122-16-49-12-108-44-154-28-41-59-83-111-93-12-2-81-13-89-7-2-2-5 0-8 0-29 4-45 137-72 68-28-71-55 76-86-21-17-53-35-34-72-5-39 31-67 75-94 4-29-78-118 21-151 39-73 40-103-91-111-141-10-59 6-81-43-32-52 52-50 46-76-9l-29-84c35-31 50-82 90-111 115-84 189-259 255-384 76-143 71-266 120-416-3-115-61-141-114-225-36-57-55-139-136-143-135-6 4-202 19-268 14-58 13-93 1-154-2-9-3-18-3-26l55 40c-8 44 10 110 23 149 105 0 132-69 200-137 52-52 25 80 89 80 42 0 106-63 146-82 52-25 72 78 107 116 31 34 56 1 78-20 28-26 63 7 94 10 32-3 134 39 131-16-4-96 97-155 177-188s79 170 87 201c12 0 49-46 73-54 93-31 235-16 324 16 3 2 5 2 6 4 76 11 105-30 176-76 143-91 155 70 259 38 67-21 46-104 66-153 25-62 79-83 128-122 9-2 26-19 32-26 34-37 80-44 125-27z",
        name: "Souss-Massa",
        nameAr: "سوس ماسة"
    },
    {
        id: "8",
        d: "m12276 8137-79 53c-12 15-37 36-33 58 6 32 21 20 48 30 28 11-19 56-11 93 12 49-23 153 48 156 93 4 39 51 1 93-10 12-34 64-10 71 27 8 67-15 94-1 6 3-1 18-1 24 0 42 43 107 69 138 21 26 67 54 55 93-9 30-57-1-75 17-32 32-1 81-79 81-33 0-88-4-69 48 8 22 6 54 20 73 19 26 49-44 86 44 26 62 28 68 1 127-34 73 42 46 82 41 60-8 56 61 91 61s43-27 85-8c15 7 98 104 101 60 2-44-59-81-21-121 56-59 85-108 116-186 40-100 64-24 122 18 34 33 65 74 108 32 53-53 69-27 125-14 38 9 20-85 21-104 6-64 26-19 55-19 36 0 171-93 184-69 24 47-34 113 56 113 41 0 168 45 129 107-33 54-100 69-100 143 24 29 25 44 59 69 24 18-27 103-11 147 21 60 67-24 104-14 96 25 81 48 19 110-51 51-91 61-63 139 69 78-74 105-34 148 41 44 88 99 57 168l129 6c99 5 84-54 187-15 107 41 189-20 298-27 92-54 94-19 171 0 0 26-21 59-21 84 0 11 13 16 23 20 6 2 15-33 29-37 10 42 82 65 119 69 53 6 63-49 100-93 60-71 142-160 180-246 15-34 4-90 17-129 11-35 61-92 86-118 120-47 205-158 306-232 133-96 346-123 450-260 134-176 248-247 460-310 58-15 101-34 162-34 97 0 153-19 242-61 42-20 221-84 148-134-32-22-27-147 21-147 1-2 2-1 2-4 34 0 18-57 38-66 69-31 31-49 45-111 2-8 10-49-5-50-51-4-18 5-63-29-2-8-14-56-28-51-7 2-39 50-41 4-2-29-3-48-28-63-23 17-35 76-75 45-23-17-5-82-5-106-3-2-27-36-27-40 0-24 44-21 50-44-23-24-48-90-1-101 17-4 28 2 44-9 13-9 34-37 41-51v-295l608-143c-11-11-135-92-146-95 0-42 87-32 110-45 60-35 55-75-11-106-44-21-68-36-97-76-22-32-11-102-20-142 3-26 20-79 36-100 10-14 72-63 63-79-19-34-193 34-232 42-8 2-55 3-52-7-96-41-63-97-185 1-109 88-39-45-108-78-48-22-56-3-83-54-27-50-26-115-56-164-41-67-92-94-133-152-28-38 18-47 19-82l-81-58-33-11c-31-11-17-66-45-66-27 0-45 80-76 97-75 42-145-54-176-112-24-47-77-105-112-146l-120-138c-21-24-64 10-86 21-129 11-231 18-191-135 22-86-102-195-177-143-67 47-145-5-167 101-34 160-57 44-148 106l-49 38c7 61 1 93 1 150 0 38 15 87 8 122l4 168c1 31-39 147-75 141-28-4-67-26-61 26 8 63 18 74-57 77-33 1-36 15-59 31-28 57-39 76 18 98 70 27 13 65 18 113 3 27 56 43 52 57-61 15-116-53-185-25-76 30-67 155-149 155-61 0-66 5-108 44-13 26-41 69-41 98 0 28 41 39 61 51 48 30-10 174-66 177-69 3-59 16-101 65-47 65-129 141-213 148-94 8-192 39-256 113-61 71-86 21-139 54l-72 44c-54 5-59 5-107-16-32-13-62-4-64 34-2 44 22 183-47 187l-162 11c-119 8-67-23-131-80-23-21-44 27-64 33-35 11-31-38-51-44 2-2-1-2-5-4l-53-44-38 73c-21 61-11 78-82 99-45 13-99 7-142 28-29 14-32 47-66 57-49 14-100 7-147 30l-74 65z",
        name: "Darâa-Tafilalet",
        nameAr: "درعا تافيلالت"
    },
    {
        id: "7",
        d: "m12933 6611-4 144c9 53-9 100-17 150-13 84 39 75 51 125 23 6-6 85 5 106 39 79 90 69 39 171-27 54-102 57-155 41-48-15-56-63-101-18-35 35-120 86-44 122 75 35 29 98 131 135 19-2 40 11 46 30 7 20-8 55-15 72-14 31-30 64-45 95l-38 73c-21 61-11 78-82 99-45 13-99 7-142 28-29 14-32 47-66 57-49 14-100 7-147 30l-74 65c-45-17-91-10-125 27-6 7-24 24-32 26-50 39-103 60-128 122-20 50 2 133-66 153-104 32-116-130-259-38-71 45-100 87-176 76-1-3-3-3-6-4-89-32-231-47-324-16-24 8-61 54-73 54-8-31-7-234-87-201s-181 92-177 188c3 55-99 13-131 16-30-2-66-35-94-10-22 20-47 53-78 20-35-38-56-141-107-116-40 19-104 82-146 82-64 0-37-132-89-80-68 68-95 137-200 137-13-39-31-106-23-149l-55-40c-3-54 10-107-5-159-59-74-10-68 2-146 12-79 46-196-16-249-20-18 68-89 68-124 0-95 80-114 107-218 35-137 139-182 199-302 39-13 119-118 142-157 24-41 9-104 41-136 65-65 67-76 67-175 0-59 36-137-54-155-5-11 38-47 47-58 51-66-16-110-16-162 8-4 41-38 46-46 97-28 182-212 270-272l62 73-4 30c-129 33 18 123 46 162 84 117 291-62 359 91 13 28 53 232 89 222 68-19 184-1 189-85 6-85 256-159 321-232 70-79-44-60-44-125 0-28 31-31 39-54 10-30-9-77 2-106 18-19 17-41 32-62 3-4 38-55 43-35 34 6 77 221 174 251 46 14 101 22 138 56 46 42 36 93 61 143 46 48 59 84 126 97 52 10 107-48 158-48 44 0 81 121 130 152 73 45 137 30 209 57z",
        name: "Marrakech-Safi",
        nameAr: "مراكش آسفي"
    },
    {
        id: "6",
        d: "m13198 5351-35 112c26 48-4 309-74 302-53-5-62 71-67 112-7 68-43 150-43 216 68 71 96 149 66 246-26 84-45 139-83 215l-29 56c-71-27-136-12-209-57-49-30-86-152-130-152-51 0-107 58-158 48-67-13-80-49-126-97-25-50-15-101-61-143-37-34-92-42-138-56-97-30-140-245-174-251-5-20-40 31-43 35-15 21-14 43-32 62-11 30 8 77-2 106-8 23-39 25-39 54 0 66 115 46 44 125-64 72-315 146-321 232-6 84-121 66-189 85-36 10-77-194-89-222-68-153-274 26-359-91-28-39-175-130-46-162l4-30-62-73c132-89 300-270 388-401 39-58 38-134 88-188 62-66 119-8 188-40l68-85c71-27 139-78 215-112l349-157c146-66 270-110 405-191l314-188c18-19 42-35 69-51l73 32c23 52 33 154 33 214 0 83 91 13 123 16 18 1 13 23 20 35 7 11 234 62 131 94-32 10-67 45-37 75 37 37 38 36 14 84 2 19-10 29-20 45-15 26-14 47-21 74-6 23 3 52-2 73z",
        name: "Casablanca-Settat",
        nameAr: "الدار البيضاء سطات"
    },
    {
        id: "5",
        d: "m12933 6611-4 144c9 53-9 100-17 150-13 84 39 75 51 125 23 6-6 85 5 106 39 79 90 69 39 171-27 54-102 57-155 41-48-15-56-63-101-18-35 35-120 86-44 122 75 35 29 98 131 135 19-2 40 11 46 30 7 20-8 55-15 72-14 31-30 64-45 95l53 44c4 2 7 2 5 4 20 5 16 54 51 44 20-6 40-54 64-33 65 57 12 88 131 80l162-11c69-5 45-144 47-187 1-38 32-47 64-34 49 20 53 20 107 16l72-44c53-33 77 18 139-54 64-75 162-105 256-113 84-7 166-83 213-148 42-49 32-62 101-65 56-2 114-147 66-177-20-12-61-23-61-51 0-29 28-72 41-98 42-39 48-44 108-44 82 0 73-125 149-155 69-27 123 41 185 25 3-14-49-31-52-57-6-47 51-86-18-113-57-22-47-42-18-98 23-16 26-30 59-31 75-3 65-14 57-77-7-53 33-30 61-26 37 5 76-111 75-141l-4-168c7-35-8-84-8-122 0-58 6-89-1-150-24-72-111-130-83-233 4-16 28-72 23-74 0-30-129 26-156 17-31-11-72-116-83-148-42-113-22-248-194-220l-148-75c-57 57 36 135 12 183-17 33-194 21-240 38-75 29-64-42-110-70-54-33-123 27-62-111 0 0-139-100-166-5-15 54-57 94-75 146-20 55 86 47 86 95-46 12-149 99-195 129-18 12-130-90-167-101l-170-16-35 112c26 48-4 309-74 302-53-5-62 71-67 112-7 68-43 150-43 216 68 71 96 149 66 246-26 84-45 139-83 215l-29 56z",
        name: "Béni Mellal-Khénifra",
        nameAr: "بني ملال خنيفرة"
    },
    {
        id: "4",
        d: "m12885 4610 73 32c23 52 33 154 33 214 0 83 91 13 123 16 18 1 13 23 20 35 7 11 234 62 131 94-32 10-67 45-37 75 37 37 38 36 14 84 2 19-10 29-20 45-15 26-14 47-21 74-6 23 3 52-2 73l170 16c37 12 149 113 167 101 47-30 149-117 195-129 0-49-106-40-86-95 18-51 60-92 75-146 27-96 166 5 166 5-61 138 8 78 62 111 46 28 35 99 110 70 45-18 223-5 240-38 24-48-69-126-12-183l57-80c22-76-24-131 15-221 15-34 93-121 61-153-19-19-87-26-83-64 4-41 106-74 68-129-28-40-108-61-133-117-19-37-77-63-50-104 12-17 69-116 81-116 1-2 48 3 63 7 58 14 81 14 72 75-5 35-31 65 14 76 137 35 327-73 232-226-44-72-120-126 1-156 58-15 161-48 161-127-39-6-77-63-105-67 2-3-20-96-27-104-30-30-77-47-102-81-78-105-177 29-218-55-24-49-46-107-35-165 19-94 46-132-64-127-83 4-192-83-248-61l-192-1c-30 158-126 321-205 452-100 165-131 326-263 472-51 218-210 325-331 500-32 47-106 79-169 116z",
        name: "Rabat-Salé-Kenitra",
        nameAr: "الرباط - سلا - القنيطرة"
    },
    {
        id: "3",
        d: "m14844 3731 139-68c21-64 33-157 33-227 0-106-4-100 94-85 59 9 168-33 223-56 81-34 68-35 87 39 36 146 386 214 478 91 96-129 52-93 172-18 29 18 150-121 193-142l118-8 88-81 172 43c104 10 68 154 30 223-39 71-116 45-116 141 0 106 5 106-80 153-73 40-33 61-33 128 0 78-168 52-54 158 64 59 81 100 81 190 8 77-15 275-82 323-79 57-26 119-93 167-58 42-185 210-73 267 78 40 66 78 131 5 10-12 47-77 66-35 5 11 20 77 29 79 6 26 81-50 92-60 20-17 88-51 35-72-136-52-36-81 25-154 79-94 197-327 311-234 112 92 114 73 262 109 43 10 202-2 176 67-39 103-215 153-245 258-25 87 218 107 280 206l178 270c-2 2-2 6-2 8-35 12-117-30-136-13-36 32 3 58-85 58-125 0-214 84-337 84-159 0-259-118-358 80-69 138-174 186-226 344l-83 103-23 115-33-11c-31-11-17-66-45-66-27 0-45 80-76 97-75 42-145-54-176-112-24-47-77-105-112-146l-120-138c-21-24-64 10-86 21-129 11-231 18-191-135 22-86-102-195-177-143-67 47-145-5-167 101-34 160-57 44-148 106l-49 38c-24-72-111-130-83-233 4-16 28-72 23-74 0-30-129 26-156 17-31-11-72-116-83-148-42-113-22-248-194-220l-148-75 57-80c22-76-24-131 15-221 15-34 93-121 61-153-19-19-87-26-83-64 4-41 106-74 68-129-28-40-108-61-133-117-19-37-77-63-50-104 12-17 69-116 81-116 1-2 48 3 63 7 58 14 81 14 72 75-5 35-31 65 14 76 137 35 327-73 232-226-44-72-120-126 1-156 58-15 161-48 161-127z",
        name: "Fès-Meknès",
        nameAr: "فاس مكناس"
    },
    {
        id: "2",
        d: "m16463 2817 6 359 172 43c104 10 68 154 30 223-39 71-116 45-116 141 0 106 5 106-80 153-73 40-33 61-33 128 0 78-168 52-54 158 64 59 81 100 81 190 8 77-15 275-82 323-79 57-26 119-93 167-58 42-185 210-73 267 78 40 66 78 131 5 10-12 47-77 66-35 5 11 20 77 29 79 6 26 81-50 92-60 20-17 88-51 35-72-136-52-36-81 25-154 79-94 197-327 311-234 112 92 114 73 262 109 43 10 202-2 176 67-39 103-215 153-245 258-25 87 218 107 280 206l178 270c-2 2-2 6-2 8-35 12-117-30-136-13-36 32 3 58-85 58-125 0-214 84-337 84-159 0-259-118-358 80-69 138-174 186-226 344l-83 103-23 115 81 58c-1 36-47 44-19 82 42 57 92 85 133 152 30 48 29 114 56 164 28 51 36 31 83 54 70 33-1 166 108 78 122-99 88-42 185-1-3 11 44 9 52 7 39-7 213-76 232-42 9 16-53 65-63 79-16 21-33 74-36 100 9 40-2 110 20 142 28 41 53 55 97 76 66 31 70 71 11 106-22 13-110 3-110 45 10 4 135 84 146 95l322-76c-6-24-34-50-35-69-3-65-8-61-44-118-14-23-67-198-21-216 49-19 191-2 252-7 71-7 91-28 151-48 64-21 219-12 293-12 37 0 87 17 124 27 65 18 99-19 157-34 44-10 61 22 85 12 43-18 157 19 216 30 72 14 163 60 231 49 107-18 251 46 341 16 143-48 62-56 5-134-35-48-4-248 32-288 11-12 58 3 77-6 43-20 100-97 136-139l-269-214-153-68-173-296c84 31 90-62 90-121 0-32-88-62-108-83-27-27-17-94-41-128-67-95-97-59-73-191 11-60 63-89 50-151-9-41 57-40 34-78-19-31-13-36-13-71 0-25-37-78-43-113-3-16-35 1-43 1-38 2-50-17-75-40 6-74 65-37 74-68 12-40-28-61-28-95 0-117 84-268 51-380-17-59-57-117-57-178 0-28 25-51 11-84-11-27-44-49-61-72-8-20-45-45-24-63 12-11 128-91 75-107-73-23-59-41-92-99-16-27-83-77-44-94 32-13 22-48 29-73 12-40 115-60 15-107-32-15-88-25-113-49-19-17 12-58-28-67-87-21-34-101-64-111-12-4-42 16-60 16-37 0-86-32-108-60l-130-188c-35-2-70-3-98-9-20-4-96-49-107-43-56 31-92 118-165 104-79-16-170-114-235-49-29 29-91-10-107-39-31-56-16-66 0-126 0-59-109-241-74-269-58 0-60 40-86 87-34 58-95 91-122 138-37 65-70 28-129 46-32 10-63 43-97 44-108 4-190-10-288-54-34-15-90-74-123-74-74 0-78 122-143 125z",
        name: "Oriental",
        nameAr: "الشرقية"
    },
    {
        id: "1",
        d: "m14844 3731 139-68c21-64 33-157 33-227 0-106-4-100 94-85 59 9 168-33 223-56 81-34 68-35 87 39 36 146 386 214 478 91 96-129 52-93 172-18 29 18 150-121 193-142l118-8 88-81-6-359c-22 1-50-11-90-46-42-36-149 32-201 28-82 16-148 34-226 66-88 36-129-21-213-23-127-4-254-75-348-150l-184-146c-94-75-125-162-237-205-71-53-50-135-94-208-39-66-78-138-41-219 6-13 41-43 41-50-39-10-116-6-158-6-59 0-99 82-162 96-49 11-94-4-142 11-79 24-80 54-174 35-41-8-30 26-57 54-70 114-49 284-126 407-63 101-72 248-120 357-23 53-35 148-71 191-1 21-4 42-8 63l192 1c56-22 165 65 248 61 110-5 84 32 64 127-12 58 11 116 35 165 41 84 140-51 218 55 25 34 72 51 102 81 7 7 29 101 27 104 28 4 66 61 105 67z",
        name: "Tanger-Tétouan-Al Hoceima",
        nameAr: "طنجة تطوان الحسيمة"
    }
]



export const LIST_CONVENTION: Convention[] = [
    {
        id: 1,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: true,
        idTypeConvention: 1,
        typeConvention: "Convention cadre",
        txtColorTypeConvention: "#405189",
        backgroundColorTypeConvention: "#ECEDF3",
        idStatusConvention: 1,
        statusConvention: "Nouvelle convention",
        txtColorStatusConvention: "#0093FF",
        backgroundColorStatusConvention: "#EDF8FE",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 2,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: true,
        idTypeConvention: 2,
        typeConvention: "Convention Spécifique",
        txtColorTypeConvention: "#408989",
        backgroundColorTypeConvention: "#ECF2F3",
        idStatusConvention: 1,
        statusConvention: "Nouvelle convention",
        txtColorStatusConvention: "#0093FF",
        backgroundColorStatusConvention: "#EDF8FE",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 3,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: true,
        idTypeConvention: 3,
        typeConvention: "Avenant convention",
        txtColorTypeConvention: "#894062",
        backgroundColorTypeConvention: "#F3EEEC",
        idStatusConvention: 1,
        statusConvention: "Nouvelle convention",
        txtColorStatusConvention: "#0093FF",
        backgroundColorStatusConvention: "#EDF8FE",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 4,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: false,
        idTypeConvention: 1,
        typeConvention: "Convention cadre",
        txtColorTypeConvention: "#405189",
        backgroundColorTypeConvention: "#ECEDF3",
        idStatusConvention: 2,
        statusConvention: "En cours d'exécution",
        txtColorStatusConvention: "#FFAD00",
        backgroundColorStatusConvention: "#FEF4ED",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 5,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: false,
        idTypeConvention: 2,
        typeConvention: "Convention Spécifique",
        txtColorTypeConvention: "#408989",
        backgroundColorTypeConvention: "#ECF2F3",
        idStatusConvention: 2,
        statusConvention: "En cours d'exécution",
        txtColorStatusConvention: "#FFAD00",
        backgroundColorStatusConvention: "#FEF4ED",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 6,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: false,
        idTypeConvention: 3,
        typeConvention: "Convention Avenant",
        txtColorTypeConvention: "#894062",
        backgroundColorTypeConvention: "#F3EEEC",
        idStatusConvention: 2,
        statusConvention: "En cours d'exécution",
        txtColorStatusConvention: "#FFAD00",
        backgroundColorStatusConvention: "#FEF4ED",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 7,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: false,
        idTypeConvention: 2,
        typeConvention: "Convention Spécifique",
        txtColorTypeConvention: "#408989",
        backgroundColorTypeConvention: "#ECF2F3",
        idStatusConvention: 3,
        statusConvention: "En retard d’exécution",
        txtColorStatusConvention: "#C92828",
        backgroundColorStatusConvention: "#FFDBDB",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 8,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: false,
        idTypeConvention: 1,
        typeConvention: "Convention cadre",
        txtColorTypeConvention: "#405189",
        backgroundColorTypeConvention: "#ECEDF3",
        idStatusConvention: 4,
        statusConvention: "Besoin avenant",
        txtColorStatusConvention: "#783FB7",
        backgroundColorStatusConvention: "#DFDBFF",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 9,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: false,
        idTypeConvention: 2,
        typeConvention: "Convention Spécifique",
        txtColorTypeConvention: "#408989",
        backgroundColorTypeConvention: "#ECF2F3",
        idStatusConvention: 5,
        statusConvention: "Clôturée",
        txtColorStatusConvention: "#28C953",
        backgroundColorStatusConvention: "#DBFFE5",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
];


export const LIST_TYPE_CONVENTION: TypeConvention[] = [
    {
        id: "1",
        name: "Convention cadre"
    },
    {
        id: "2",
        name: "Convention spécifique"
    },
    {
        id: "3",
        name: "Convention avenant"
    }
]

export const LIST_CONTEXTE_CONVENTION: ContexteConvention[] = [
    {
        id: "1",
        name: "Contexte 1"
    },
    {
        id: "2",
        name: "Contexte 2"
    },
    {
        id: "3",
        name: "Contexte 3"
    }
]

export const LIST_DIMENSION_ROYALE: DimensionRoyale[] = [
    {
        id: "1",
        name: "Dimension 1"
    },
    {
        id: "2",
        name: "Dimension 2"
    },
    {
        id: "3",
        name: "Dimension 3"
    }
]

export const LIST_INTITULE_CONVENTION: IntituleConvention[] = [
    {
        id: "1",
        name: "Intitulé 1"
    },
    {
        id: "2",
        name: "Intitulé 2"
    },
    {
        id: "3",
        name: "Intitulé 3"
    }
]

export const LIST_SECTEUR: Secteur[] = [
    {
        id: "1",
        name: "Industrie",
        nameAr: "الصناعة",
    },
    {
        id: "2",
        name: "Commerce",
        nameAr: "التجارة",
    },
    {
        id: "3",
        name: "Infrastructures industrielles",
        nameAr: "البنيات التحتية الصناعية",
    }
]


export const LIST_TYPE_ENGAGEMENT: TypeEngagementI[] = [
    {
        id: "1",
        name: "Financier"
    },
    {
        id: "2",
        name: "Autres"
    },
    {
        id: "3",
        name: "Financier et autres"
    }
]
export const LIST_DIPOSITIF_FINANCEMENT: DipositifFinancementI[] = [
    {
        id: "1",
        name: "Budget1"
    },
    {
        id: "2",
        name: "Budget2"
    },
    {
        id: "3",
        name: "Budget3"
    }
]

export const LIST_MODE_DEBLOCAGE: ModeDeblocageI[] = [
    {
        id: "1",
        name: "Par échéancier"
    },
    {
        id: "2",
        name: "Par Année"
    }
]

export const LIST_TYPE_MODE_GOUVERNANCE: TypeModeGouvernanceI[] = [
    {
        id: "1",
        name: "Comité Régional1"
    },
    {
        id: "2",
        name: "Comité Régional2"
    },
    {
        id: "3",
        name: "Comité Régional3"
    }
]

export const LIST_FREQUENCE: FrequenceI[] = [
    {
        id: "1",
        valFrequence: "3 mois"
    },
    {
        id: "2",
        valFrequence: "6 mois"
    }
]




export const LIST_MODE_GOUVERNANCE: ComiteItemI[] = [
    {
        id: "1",
        idModeGouvernanace: "1",
        nameMode: "Comité Régional1",
        idFreq: "1",
        valFreq: "3 mois"
    },
    {
        id: "2",
        idModeGouvernanace: "2",
        nameMode: "Comité Régional2",
        idFreq: "2",
        valFreq: "6 mois"
    },
]


export const LIST_MODE_GOUVERNANCE_CONSULTER_CONV: ModeGouvernanceItemConsulterConvI[] = [
    {
        id: "1",
        idModeGouvernanace: "1",
        nameMode: "Comité Régional1",
        date: "22/08/2022",
        pv: ""
    },
    {
        id: "2",
        idModeGouvernanace: "2",
        nameMode: "Comité Régional2",
        date: "22/08/2022",
        pv: ""
    },
]

export const LIST_ETAT_AVANCEMENT_PROJET_CONSULTER_CONV: EtatAvancementProjetI[] = [
    {
        id: "1",
        nameProject: "Aménagement de la ZI à la ville de Béni Mellal",
        status: "Etude en cours 20%",
        bgColorStatus: "#FFDBDB",
        txtColorStatus: "#C92828",
        dateSituation: "18/09/2022"
    },
    {
        id: "2",
        nameProject: "Aménagement de la ZI à la ville de Berchid",
        status: "Projet achevé 20%",
        bgColorStatus: "#DBFFE5",
        txtColorStatus: "#28C953",
        dateSituation: "16/09/2022"
    },
]
export const LIST_REMARQUE_CONSULTER_CONV: RemarqueConsulterConvI[] = [
    {
        id: "1",
        nameEntite: "Direction métier",
        date: "18/09/2022",
        remarque: 'Convention cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra',
        // remarque: "Dans le cadre des Hautes Orientations fffff jijija jnajdijzv kj  ijez kjjnc jnjnjcn jnjndcjvn jnjbndz jnjnjn jndjcnj jnjdnv jnbjnjn jn   jn jnjcbnjnbv jnjbnzj jbdcjbj jdjv jbbDVJ JBSDVJJN SV JSDJVN S JHSDJ",

    },
    {
        id: "2",
        nameEntite: "Direction Budget",
        date: "18/09/2022",
        remarque: "Dans le cadre des Hautes Orientations",
    },
]

export const LIST_HISTORIQUE_REMARQUE_CONSULTER_CONV: HistoriqueRemarqueI[] = [
    {
        id: "1",
        date: "18/09/2022",
        remarque: 'Convention cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra',

    },
    {
        id: "2",
        date: "18/09/2022",
        remarque: 'Convention cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra',
    },
    {
        id: "3",
        date: "18/09/2022",
        remarque: 'Convention cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra',
    },
]


export const LIST_CONVENTION_EN_LIEN_AVEC_CONVENTION_CADRE: Convention[] = [
    {
        id: 1,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: false,
        idTypeConvention: 1,
        typeConvention: "Convention cadre",
        txtColorTypeConvention: "#405189",
        backgroundColorTypeConvention: "#ECEDF3",
        idStatusConvention: 1,
        statusConvention: "Nouvelle convention",
        txtColorStatusConvention: "#0093FF",
        backgroundColorStatusConvention: "#EDF8FE",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 2,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: false,
        idTypeConvention: 1,
        typeConvention: "Convention Spécifique",
        txtColorTypeConvention: "#408989",
        backgroundColorTypeConvention: "#ECF2F3",
        idStatusConvention: 1,
        statusConvention: "Nouvelle convention",
        txtColorStatusConvention: "#0093FF",
        backgroundColorStatusConvention: "#EDF8FE",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
    {
        id: 3,
        dateUpdate: "02/02/2022",
        isDimensionRoyale: false,
        idTypeConvention: 1,
        typeConvention: "Avenant convention",
        txtColorTypeConvention: "#894062",
        backgroundColorTypeConvention: "#F3EEEC",
        idStatusConvention: 1,
        statusConvention: "Nouvelle convention",
        txtColorStatusConvention: "#0093FF",
        backgroundColorStatusConvention: "#EDF8FE",
        description: "Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels",
        dateSignature: "02/02/2022"
    },
]


export const LIST_PROJET_IMPLIQUANT_MINISTERE: ItemProjetConsulterConvI[] = [
    {
        id: 1,
        idStatus: 1,
        status: "En phase d’études",
        bgColorStatus: "#EDF8FE",
        txtColorStatus: "#0093FF",
        titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
        coutGlobal: 4,
        contribution: 2,
        situationDeblocage: 50,
        dateDerniereSituation: "18/09/2022"
    },
    {
        id: 2,
        idStatus: 1,
        status: "En phase d’études",
        bgColorStatus: "#EDF8FE",
        txtColorStatus: "#0093FF",
        titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
        coutGlobal: 4,
        contribution: 2,
        situationDeblocage: 30,
        dateDerniereSituation: "18/09/2022"
    },
    {
        id: 3,
        idStatus: 1,
        status: "En phase d’études",
        bgColorStatus: "#EDF8FE",
        txtColorStatus: "#0093FF",
        titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
        coutGlobal: 4,
        contribution: 2,
        situationDeblocage: 70,
        dateDerniereSituation: "18/09/2022"
    },
]



export const LIST_PROJET: ProjetI[] = [
    {
        id: "1",
        name: "Projet1"
    },
    {
        id: "2",
        name: "Projet2"
    },
    {
        id: "3",
        name: "Projet3"
    }
]

export const LIST_ENGAGEMENT_FINANCIER: EngagementFinancierI[] = [
    {
        id: "1",
        idTypeEngagement: "1",
        nameTypeEngagement: "nameTypeEngagement1",
        idDipositifFinancier: "1",
        nameDipositifFinancier: "nameDipositifFinancier1",
        idModeDeblocage: "1",
        nameModeDeblocage: "nameModeDeblocage1",
        nameAxe: "nameAxe1",
        nameProject: "Aménagement de la ZI à la ville de Béni Mellal",
        cout: 20,
        listEcheancier: [{ echeancier: "20%", contribution: 1 }, { echeancier: "30%", contribution: 1 }, { echeancier: "40%", contribution: 1 }, { echeancier: "50%", contribution: 1 }, { echeancier: "60%", contribution: 1 }, { echeancier: "70%", contribution: 1 }],
    },
    {
        id: "2",
        idTypeEngagement: "2",
        nameTypeEngagement: "nameTypeEngagement2",
        idDipositifFinancier: "2",
        nameDipositifFinancier: "nameDipositifFinancier2",
        idModeDeblocage: "2",
        nameModeDeblocage: "nameModeDeblocage2",
        nameAxe: "nameAxe2",
        nameProject: "Aménagement de la ZI à la ville de Béni Mellal",
        cout: 30,
        listEcheancier: [{ echeancier: "20%", contribution: 1 }, { echeancier: "30%", contribution: 1 }, { echeancier: "40%", contribution: 1 }],
    },
    {
        id: "3",
        idTypeEngagement: "1",
        nameTypeEngagement: "nameTypeEngagement1",
        idDipositifFinancier: "3",
        nameDipositifFinancier: "nameDipositifFinancier3",
        idModeDeblocage: "3",
        nameModeDeblocage: "nameModeDeblocage3",
        nameAxe: "nameAxe1",
        nameProject: "Aménagement de la ZI à la ville de Béni Mellal",
        cout: 20,
        listEcheancier: [{ echeancier: "20%", contribution: 1 }, { echeancier: "30%", contribution: 1 }, { echeancier: "40%", contribution: 1 }],
    },
]


export const LIST_CONTRIBUTION_PARTENAIRE: ContributionPartenaireI[] = [
    {
        id: 1,
        idProjet: 1,
        nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
        namePartenaire: "Ministère",
        listEcheancier: [{ echeancier: "20%", contribution: 1 }, { echeancier: "30%", contribution: 1 }, { echeancier: "40%", contribution: 1 }, { echeancier: "50%", contribution: 1 }, { echeancier: "60%", contribution: 1 }, { echeancier: "70%", contribution: 1 }],
    },
    {
        id: 2,
        idProjet: 2,
        nameProjet: "Aménagement de la ZI à la ville de Béni Mellal 2",
        namePartenaire: "Ministère",
        listEcheancier: [{ echeancier: "20%", contribution: 1 }, { echeancier: "30%", contribution: 1 }, { echeancier: "40%", contribution: 1 }, { echeancier: "50%", contribution: 1 }, { echeancier: "60%", contribution: 1 }, { echeancier: "70%", contribution: 1 }],
    },
]

export const LIST_AXE_DECONCENTRATION: AxeDeconcentrationI[] = [
    {
        name: "المحور الأول",
        desc: "الاختصاصات، ولاسيما منها ذات الطابع التقريري التي سيتم نقلها إلى المصالح اللاممركزة.",
        bgcolor1: "#FFC11B",
        bgcolor2: "#FF911B",
        pageToNavigate: NavigationConstants.AXE1_PAGE
    },
    {
        name: "المحور التاني",
        desc: "لاختصاصات والصلاحيات والمهام التي يمكن أن تكون موضوع تفويض إلى المصالح اللاممركزة",
        bgcolor1: "#FCB999",
        bgcolor2: "#F26D70",
        pageToNavigate: NavigationConstants.AXE2_PAGE
    },
    {
        name: "المحور الثالث",
        desc: "توزيع الموارد البشرية بين المصالح المركزية والمصالح اللاممركزة",
        bgcolor1: "#EB5796",
        bgcolor2: "#A4479F",
        pageToNavigate: NavigationConstants.AXE3_PAGE
    },
    {
        name: "المحور الرابع",
        desc: "توزيع الموارد المادية بين المصالح المركزية والمصالح اللاممركزة",
        bgcolor1: "#3487E8",
        bgcolor2: "#384B9D",
        pageToNavigate: NavigationConstants.AXE4_PAGE
    },
    {
        name: "المحور الخامس",
        desc: "الأهداف المراد تحقيقها من قبل المصالح اللاممركزة في ضوء الاختصاصات التي سيتم نقلها إليها ومؤشرات قياس نجاعة أدائها في تحقيق هذه الأهداف",
        bgcolor1: "#6CC9F4",
        bgcolor2: "#6567F0",
        pageToNavigate: NavigationConstants.AXE5_PAGE
    }
]

export const LIST_PERMISSION_BY_SECTOR: PermissionBySectorI[] = [
    {
        id: 1,
        idSecteur: 1,
        nameSecteur: "الصناعة",
        list: [
            {
                id: 1,
                idSecteur: 1,
                permisssion: "استقبال المستثمرين في القطاع الصناعي ومدهم بالمعلومات وتوجيههم وخاصة بالنسبة للمشاريع التي تكتسي أهمية خاصة وتحتاج إلى مواكبة نوعية"
            }
        ]
    },
    {
        id: 2,
        idSecteur: 2,
        nameSecteur: "التجارة",
        list: [
            {
                id: 1,
                idSecteur: 2,
                permisssion: "مراقبة المنتوجات والسلع والخدمات المعروضة في السوق وفقا للنصوص التشريعية والتنظيمية الجاري بها العمل"
            },
            {
                id: 2,
                idSecteur: 2,
                permisssion: "القيام بأنشطة المراقبة في مجال القياسة القانونية، بما في ذلك أجهزة القياس، ومراقبة السوق تدبير معايير القياس الوطنية"
            },
            {
                id: 3,
                idSecteur: 2,
                permisssion: "مساعدة المقاولات الصناعية في اختيار أدوات القياس واستخدامها وصيانتها"
            }
        ]
    },
    {
        id: 3,
        idSecteur: 3,
        nameSecteur: "البنيات التحتية الصناعية",
        list: [
            {
                id: 1,
                idSecteur: 3,
                permisssion: "القيام، بتنسيق وثيق مع السلطات والهيئات المختصة، على وضع مخططات البنيات التحتية الصناعية والتجارية والتكنولوجية والبحث والتطوير وإنجازها"
            },
            {
                id: 2,
                idSecteur: 3,
                permisssion: " القيام بتأطير العمليات الرامية إلى تموضع البنيات التحتية الصناعية والتجارية والتكنولوجية والبحث والتطوير وتتبع تنفيذ الاتفاقيات المبرمة لهذا الغرض مع الدولة والهيئات المختصة"
            }
        ]
    },
    {
        id: 4,
        idSecteur: 4,
        nameSecteur: "التكوين المهني",
        list: [
            {
                id: 1,
                idSecteur: 4,
                permisssion: " المساهمة، بتعاون مع المديريات المركزية المعنية، في تحديد الاحتياجات من الموارد البشرية في المجالات التي تتكلف بها الوزارة"
            },
            {
                id: 2,
                idSecteur: 4,
                permisssion: " القيام بتأطير العمليات الرامية إلى تموضع البنيات التحتية الصناعية والتجارية والتكنولوجية والبحث والتطوير وتتبع تنفيذ الاتفاقيات المبرمة لهذا الغرض مع الدولة والهيئات المختصة"
            }
        ]
    },
]




export const LIST_OPERATION: OperationI[] = [
    {
        id: 1,
        lblOperation: "استقبال المستثمرين وتوجيههم",
        idStatus: null,
        status: "",
        bgColorStatus: "",
        isDoneYearOne: null,
        isDoneYearTwo: null,
        isDoneYearThree: null,
        date: "18/09/2022",
    },
    {
        id: 2,
        lblOperation: "خريطة الحاجيات من حيث الرأسمال البشري - رفع الحاجيات/الصعوبات التي تهم المستثمرين/المقاولات على مستوى الموارد البشرية إلى وزارة الصناعة والاستثمار والتجارة والاقتصاد الرقمي بشكل دوري ",
        idStatus: 1,
        status: "انجزت",
        bgColorStatus: "#3ECE10",
        isDoneYearOne: true,
        isDoneYearTwo: null,
        isDoneYearThree: null,
        date: "18/09/2022",
    },
    {
        id: 3,
        lblOperation: "خريطة الحاجيات من حيث الرأسمال البشري - المساهمة في إنجاز الخريطة الجهوية للحاجيات من حيث الرأسمال البشري",
        idStatus: 2,
        status: "لم تنجز",
        bgColorStatus: "#F51D1D",
        isDoneYearOne: false,
        isDoneYearTwo: null,
        isDoneYearThree: null,
        date: "18/09/2022",
    },
]


export const LIST_DIFFUSION_RH: DiffusionRhItemI[] = [
    {
        id: 1,
        lblOrganisation: "مهندس ومهندس معماري ",
        situationActuelleAdministrationsCentrales: 234,
        situationActuelleInteretsRegionaux: 23,
        objectifsAtteindreYearOne: 2,
        objectifsAtteindreYearTwo: 3,
        objectifsAtteindreYearThree: 45
    },
    {
        id: 2,
        lblOrganisation: "متصرف",
        situationActuelleAdministrationsCentrales: 234,
        situationActuelleInteretsRegionaux: 23,
        objectifsAtteindreYearOne: 2,
        objectifsAtteindreYearTwo: 3,
        objectifsAtteindreYearThree: 45
    },
    {
        id: 3,
        lblOrganisation: "تقني",
        situationActuelleAdministrationsCentrales: 234,
        situationActuelleInteretsRegionaux: 23,
        objectifsAtteindreYearOne: 2,
        objectifsAtteindreYearTwo: 3,
        objectifsAtteindreYearThree: 45
    },
    {
        id: 4,
        lblOrganisation: "مساعد تقني",
        situationActuelleAdministrationsCentrales: 234,
        situationActuelleInteretsRegionaux: 23,
        objectifsAtteindreYearOne: 2,
        objectifsAtteindreYearTwo: 3,
        objectifsAtteindreYearThree: 45
    },
    {
        id: 5,
        lblOrganisation: "مساعد إداري",
        situationActuelleAdministrationsCentrales: 234,
        situationActuelleInteretsRegionaux: 23,
        objectifsAtteindreYearOne: 2,
        objectifsAtteindreYearTwo: 3,
        objectifsAtteindreYearThree: 45
    },
]

export const LIST_DIFFUSION_RESSOURCE_MATERIELLE: DiffusionRessourcesMateriellesI[] = [
    {
        id: 1,
        typeRessourcesMaterielles: "الميزانية",
        listRessourcesMaterielles: [
            {
                id: 1,
                nameRessource: "ميزانية الاستثمار",
                situationActuelleAdministrationsCentrales: 220412,
                situationActuelleInteretsRegionaux: null,
                objectifsAtteindreYearOne: 4613,
                objectifsAtteindreYearTwo: 13,
                objectifsAtteindreYearThree: null
            },
            {
                id: 2,
                nameRessource: "ميزانية التسيير",
                situationActuelleAdministrationsCentrales: 2204125,
                situationActuelleInteretsRegionaux: null,
                objectifsAtteindreYearOne: 3,
                objectifsAtteindreYearTwo: 246,
                objectifsAtteindreYearThree: 5
            }
        ]
    },
    {
        id: 2,
        typeRessourcesMaterielles: "التجهيزات المعلوماتية",
        listRessourcesMaterielles: [
            {
                id: 1,
                nameRessource: "حاسوب مكتبي",
                situationActuelleAdministrationsCentrales: 4125,
                situationActuelleInteretsRegionaux: null,
                objectifsAtteindreYearOne: 254,
                objectifsAtteindreYearTwo: 32,
                objectifsAtteindreYearThree: 3
            },
            {
                id: 2,
                nameRessource: "حاسوب محمول",
                situationActuelleAdministrationsCentrales: 4,
                situationActuelleInteretsRegionaux: null,
                objectifsAtteindreYearOne: 3541,
                objectifsAtteindreYearTwo: 613,
                objectifsAtteindreYearThree: 13
            },
            {
                id: 3,
                nameRessource: "طابعات",
                situationActuelleAdministrationsCentrales: 789,
                situationActuelleInteretsRegionaux: null,
                objectifsAtteindreYearOne: 123,
                objectifsAtteindreYearTwo: null,
                objectifsAtteindreYearThree: 543
            },
            {
                id: 4,
                nameRessource: "ماسح ضوئي (scanner)",
                situationActuelleAdministrationsCentrales: 220412,
                situationActuelleInteretsRegionaux: null,
                objectifsAtteindreYearOne: 3254613,
                objectifsAtteindreYearTwo: 3254613,
                objectifsAtteindreYearThree: 3254613
            },
            {
                id: 5,
                nameRessource: "آلات ناسخة",
                situationActuelleAdministrationsCentrales: 678,
                situationActuelleInteretsRegionaux: null,
                objectifsAtteindreYearOne: 935,
                objectifsAtteindreYearTwo: 632,
                objectifsAtteindreYearThree: null
            },
        ]
    },
    {
        id: 3,
        typeRessourcesMaterielles: "الوسائل اللوجيستكية",
        listRessourcesMaterielles: [
            {
                id: 1,
                nameRessource: "السيارات",
                situationActuelleAdministrationsCentrales: 2204,
                situationActuelleInteretsRegionaux: null,
                objectifsAtteindreYearOne: 345,
                objectifsAtteindreYearTwo: 752,
                objectifsAtteindreYearThree: 89
            }
        ]
    }
]



export const LIST_INDICATOR_BY_SECTOR: IndicatorBySectorI[] = [
    {
        id: 1,
        idSecteur: 1,
        nameSecteur: "الصناعة",
        list: [
            {
                id: 1,
                idSecteur: 1,
                indicateur: "استقبال المستثمرين في القطاع الصناعي ومدهم بالمعلومات وتوجيههم وخاصة بالنسبة للمشاريع التي تكتسي أهمية خاصة وتحتاج إلى مواكبة نوعية"
            }
        ]
    },
    {
        id: 2,
        idSecteur: 2,
        nameSecteur: "التجارة",
        list: [
            {
                id: 1,
                idSecteur: 2,
                indicateur: "مراقبة المنتوجات والسلع والخدمات المعروضة في السوق وفقا للنصوص التشريعية والتنظيمية الجاري بها العمل"
            },
            {
                id: 2,
                idSecteur: 2,
                indicateur: "القيام بأنشطة المراقبة في مجال القياسة القانونية، بما في ذلك أجهزة القياس، ومراقبة السوق تدبير معايير القياس الوطنية"
            },
            {
                id: 3,
                idSecteur: 2,
                indicateur: "مساعدة المقاولات الصناعية في اختيار أدوات القياس واستخدامها وصيانتها"
            }
        ]
    },
    {
        id: 3,
        idSecteur: 3,
        nameSecteur: "البنيات التحتية الصناعية",
        list: [
            {
                id: 1,
                idSecteur: 3,
                indicateur: "القيام، بتنسيق وثيق مع السلطات والهيئات المختصة، على وضع مخططات البنيات التحتية الصناعية والتجارية والتكنولوجية والبحث والتطوير وإنجازها"
            },
            {
                id: 2,
                idSecteur: 3,
                indicateur: " القيام بتأطير العمليات الرامية إلى تموضع البنيات التحتية الصناعية والتجارية والتكنولوجية والبحث والتطوير وتتبع تنفيذ الاتفاقيات المبرمة لهذا الغرض مع الدولة والهيئات المختصة"
            }
        ]
    },
    {
        id: 4,
        idSecteur: 4,
        nameSecteur: "التكوين المهني",
        list: [
            {
                id: 1,
                idSecteur: 4,
                indicateur: " المساهمة، بتعاون مع المديريات المركزية المعنية، في تحديد الاحتياجات من الموارد البشرية في المجالات التي تتكلف بها الوزارة"
            },
            {
                id: 2,
                idSecteur: 4,
                indicateur: " القيام بتأطير العمليات الرامية إلى تموضع البنيات التحتية الصناعية والتجارية والتكنولوجية والبحث والتطوير وتتبع تنفيذ الاتفاقيات المبرمة لهذا الغرض مع الدولة والهيئات المختصة"
            }
        ]
    },
]





export const LIST_UNITE_MESURE_BY_BUT: UniteMesureByButI[] = [
    {
        id: 1,
        idBut: 1,
        nameBut: "السهر على استقبال المستثمرين وتوجيههم",
        listUniteMesure: [
            {
                id: 1,
                uniteMesure: "عدد الطلبات المستلمة حسب البرنامج/ المعالجة",
                etatYearOne: "100%",
                etatYearTwo: "100%",
                etatYearThree: "100%"
            },
            {
                id: 2,
                uniteMesure: " عدد الطلبات المعالجة حسب البرنامج",
                etatYearOne: "100%",
                etatYearTwo: "100%",
                etatYearThree: "100%"
            },
            {
                id: 3,
                uniteMesure: "عدد الأنشطة الإعلامية والتوجيهية/ المبرمجة",
                etatYearOne: "100%",
                etatYearTwo: "100%",
                etatYearThree: "100%"
            },
            {
                id: 4,
                uniteMesure: "عدد المنخرطين الجدد في برامج المواكبة/ أهداف البرنامج",
                etatYearOne: "100%",
                etatYearTwo: "100%",
                etatYearThree: "100%"
            }
        ]
    },
    {
        id: 2,
        idBut: 2,
        nameBut: "السهر على استقبال المستثمرين",
        listUniteMesure: [
            {
                id: 1,
                uniteMesure: "عدد الطلبات المستلمة حسب البرنامج/ المعالجة",
                etatYearOne: "100%",
                etatYearTwo: "100%",
                etatYearThree: "100%"
            }
        ]
    }
]
export const CONTRIBUTION_FINANCIERE_MIC_PROJETS: ContributionFinanciereMICProjetsI[] = [
    {
        id: 1,
        idAxe: 1,
        nameAxe: "Aménagement",
        listProjet: [
            {
                id: 1,
                nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                listContribution: [
                    {
                        id: 1,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 2,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 3,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 4,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 5,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 6,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                ],
                totalPrevu: 60,
                totalDebloque: 60
            },
            {
                id: 2,
                nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                listContribution: [
                    {
                        id: 1,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 2,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 3,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 4,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 5,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 6,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                ],
                totalPrevu: 60,
                totalDebloque: 60
            }
        ]
    },
    {
        id: 2,
        idAxe: 2,
        nameAxe: "énergie",
        listProjet: [
            {
                id: 1,
                nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                listContribution: [
                    {
                        id: 1,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 2,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 3,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 4,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 5,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 6,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                ],
                totalPrevu: 60,
                totalDebloque: 60
            },
            {
                id: 2,
                nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                listContribution: [
                    {
                        id: 1,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 2,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 3,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 4,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 5,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 6,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                ],
                totalPrevu: 60,
                totalDebloque: 60
            }
        ]
    },
    {
        id: 3,
        idAxe: 2,
        nameAxe: "énergie",
        listProjet: [
            {
                id: 1,
                nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                listContribution: [
                    {
                        id: 1,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 2,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 3,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 4,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 5,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 6,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                ],
                totalPrevu: 60,
                totalDebloque: 60
            },
            {
                id: 2,
                nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                listContribution: [
                    {
                        id: 1,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 2,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 3,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 4,
                        annee: "2022",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 5,
                        annee: "2023",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                    {
                        id: 6,
                        annee: "2024",
                        valPrevu: 20,
                        valDebloque: 20,
                    },
                ],
                totalPrevu: 60,
                totalDebloque: 60
            }
        ]
    }
]



export const LIST_PROJET_FILTRED: ItemListProjetIFiltredI[] = [
    {
        id: 1,
        idStatus: 1,
        nameStatus: "En phase d’études",
        bgColorStatus: "#EDF8FE",
        txtColorStatus: "#0093FF",
        listProjet: [
            {
                id: 1,
                idStatus: 1,
                status: "En phase d’études",
                bgColorStatus: "#EDF8FE",
                txtColorStatus: "#0093FF",
                titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                coutGlobal: 4,
                contribution: 2,
                situationDeblocage: 50,
                dateDerniereSituation: "18/09/2022"
            },
            {
                id: 2,
                idStatus: 1,
                status: "En phase d’études",
                bgColorStatus: "#EDF8FE",
                txtColorStatus: "#0093FF",
                titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                coutGlobal: 4,
                contribution: 2,
                situationDeblocage: 30,
                dateDerniereSituation: "18/09/2022"
            },
            {
                id: 3,
                idStatus: 1,
                status: "En phase d’études",
                bgColorStatus: "#EDF8FE",
                txtColorStatus: "#0093FF",
                titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                coutGlobal: 4,
                contribution: 2,
                situationDeblocage: 70,
                dateDerniereSituation: "18/09/2022"
            },
        ]
    },
    {
        id: 2,
        idStatus: 2,
        nameStatus: "Etudes achevées",
        bgColorStatus: "#FBF3E3",
        txtColorStatus: "#FDAC2A",
        listProjet: [
            {
                id: 1,
                idStatus: 1,
                status: "Etudes achevées",
                bgColorStatus: "#FBF3E3",
                txtColorStatus: "#FDAC2A",
                titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                coutGlobal: 4,
                contribution: 2,
                situationDeblocage: 50,
                dateDerniereSituation: "18/09/2022"
            },
            {
                id: 2,
                idStatus: 1,
                status: "Etudes achevées",
                bgColorStatus: "#FBF3E3",
                txtColorStatus: "#FDAC2A",
                titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                coutGlobal: 4,
                contribution: 2,
                situationDeblocage: 30,
                dateDerniereSituation: "18/09/2022"
            },
            {
                id: 3,
                idStatus: 1,
                status: "Etudes achevées",
                bgColorStatus: "#FBF3E3",
                txtColorStatus: "#FDAC2A",
                titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                coutGlobal: 4,
                contribution: 2,
                situationDeblocage: 70,
                dateDerniereSituation: "18/09/2022"
            },
        ]
    },
    {
        id: 3,
        idStatus: 3,
        nameStatus: "Non Démarré",
        bgColorStatus: "#FBE4E3",
        txtColorStatus: "#C72A2E",
        listProjet: [
            {
                id: 1,
                idStatus: 1,
                status: "Non Démarré",
                bgColorStatus: "#FBE4E3",
                txtColorStatus: "#C72A2E",
                titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                coutGlobal: 4,
                contribution: 2,
                situationDeblocage: 50,
                dateDerniereSituation: "18/09/2022"
            },
            {
                id: 2,
                idStatus: 1,
                status: "Non Démarré",
                bgColorStatus: "#FBE4E3",
                txtColorStatus: "#C72A2E",
                titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                coutGlobal: 4,
                contribution: 2,
                situationDeblocage: 30,
                dateDerniereSituation: "18/09/2022"
            },
            {
                id: 3,
                idStatus: 1,
                status: "Non Démarré",
                bgColorStatus: "#FBE4E3",
                txtColorStatus: "#C72A2E",
                titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                coutGlobal: 4,
                contribution: 2,
                situationDeblocage: 70,
                dateDerniereSituation: "18/09/2022"
            },
        ]
    },

]

export const LIST_PROJET_PAR_STATUS: ItemProjetI[] = [
    {
        id: 1,
        idStatus: 1,
        status: "En phase d’études",
        bgColorStatus: "#EDF8FE",
        txtColorStatus: "#0093FF",
        titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
        coutGlobal: 4,
        contribution: 2,
        situationDeblocage: 50,
        dateDerniereSituation: "18/09/2022"
    },
    {
        id: 2,
        idStatus: 1,
        status: "En phase d’études",
        bgColorStatus: "#EDF8FE",
        txtColorStatus: "#0093FF",
        titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
        coutGlobal: 4,
        contribution: 2,
        situationDeblocage: 30,
        dateDerniereSituation: "18/09/2022"
    },
    {
        id: 3,
        idStatus: 1,
        status: "En phase d’études",
        bgColorStatus: "#EDF8FE",
        txtColorStatus: "#0093FF",
        titleProjet: "Aménagement de la ZI à la ville de Béni Mellal",
        coutGlobal: 4,
        contribution: 2,
        situationDeblocage: 70,
        dateDerniereSituation: "18/09/2022"
    },
]


export const LIST_PROVINCE: ProvinceI[] = [
    {
        id: "1",
        name: "Province 1"
    },
    {
        id: "2",
        name: "Province 2"
    },
    {
        id: "3",
        name: "Province 3"
    }
]

export const LIST_ENGAGEMENT_FINANCIER_CONV_REGIONALE_SPECIFIQUE: EngagementFinancierConvRegionaleSpecifiqueI[] = [
    {
        id: 1,
        nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
        listEcheancier: [{ echeancier: "20%", contribution: 1 }, { echeancier: "30%", contribution: 1 }, { echeancier: "40%", contribution: 1 }, { echeancier: "50%", contribution: 1 }, { echeancier: "60%", contribution: 1 }, { echeancier: "70%", contribution: 1 }],
    },
    {
        id: 2,
        nameProjet: "Aménagement 2",
        listEcheancier: [{ echeancier: "20%", contribution: 1 }, { echeancier: "30%", contribution: 1 }, { echeancier: "40%", contribution: 1 }, { echeancier: "50%", contribution: 1 }, { echeancier: "60%", contribution: 1 }, { echeancier: "70%", contribution: 1 }],
    },
]

export const LIST_AUTRE_ENGAGEMENT_CONV_REGIONALE_SPECIFIQUE: AutreEngagementConvRegionaleSpecifiqueI[] = [
    {
        id: 1,
        nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
        listEcheancier: [{ echeancier: "20%", contribution: 1 }, { echeancier: "30%", contribution: 1 }, { echeancier: "40%", contribution: 1 }, { echeancier: "50%", contribution: 1 }, { echeancier: "60%", contribution: 1 }, { echeancier: "70%", contribution: 1 }],
    },
    {
        id: 2,
        nameProjet: "Aménagement de la ZI à la ville de Béni Mellal 2",
        listEcheancier: [{ echeancier: "20%", contribution: 1 }, { echeancier: "30%", contribution: 1 }, { echeancier: "40%", contribution: 1 }, { echeancier: "50%", contribution: 1 }, { echeancier: "60%", contribution: 1 }, { echeancier: "70%", contribution: 1 }],
    }
]

export const LIST_TYPE_MODIFICATION_CONV_AVENANT: TypeModificationConvAvenantI[] = [
    {
        id: 1,
        name: "Modification d’une clause de la convention",
    },
    {
        id: 2,
        name: "Modification des engagements financiers",
    }
]

export const LIST_TYPE_ENGAGEMENT_FINANCIER_CONV_AVENANT: TypeEngagementFinancierConvAvenantI[] = [
    {
        id: 1,
        name: "Substitution du projet",
    },
    {
        id: 2,
        name: "Modification de la domiciliation des contributions",
    },
    {
        id: 3,
        name: "Report de l’année de déblocage de la contribution du Ministère",
    },
    {
        id: 4,
        name: "Report de l’année de déblocage de la contribution des partenaires"
    },
    {
        id: 5,
        name: "Ajout d’une contribution (augmentation)"
    }
]

export const LIST_ANNEE_OPERATION: AnneeOperationI[] = [
    {
        id: 1,
        lblAnnee: "السنة الأولى",
    },
    {
        id: 2,
        lblAnnee: "السنة الثانية",
    },
    {
        id: 3,
        lblAnnee: "السنة الثالة",
    }
]


export const LIST_STATUT_OPERATION: StatutOperationI[] = [
    {
        id: 1,
        lblStatut: "انجزت",
    },
    {
        id: 2,
        lblStatut: "لم تنجز",
    },
]


