import { Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { AxeI } from '../../models/axe';
import { DomiciliationContributionI } from '../../models/domiciliationContribution';
import MainButton from '../mainButton/MainButton';
import "./styles.scss";

export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickAdd: ({ id, articleConvention, organismeBeneficiaire, rib, autreInfo }: DomiciliationContributionI) => void;
    isOpen: boolean,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function ModalAjouterDomiciliation({ isOpen, onClickClose, onClickAdd }: Props) {
    /* #region  Article de la convention  */
    const [articleConvention, setArticleConvention] = React.useState<string>("")
    const handleChangeInputArticleConvention = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArticleConvention(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  Organisme beneficiaire */
    const [organismeBeneficiaire, setOrganismeBeneficiaire] = React.useState<string>("")
    const handleChangeInputOrganismeBeneficiaire = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrganismeBeneficiaire(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region RIB */
    const [rib, setRib] = React.useState<string>("")
    const handleChangeInputRib = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRib(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region Autres informations */
    const [autresInformations, setAutresInformations] = React.useState<string>("")
    const handleChangeInputAutresInformations = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAutresInformations(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    useEffect(() => {
        setArticleConvention("");
        setOrganismeBeneficiaire("");
        setRib("");
        setAutresInformations("");
    }, [isOpen])
    return (
        <Modal
            open={isOpen}
            onClose={onClickClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={[style, { width: { xs: "70%", sm: "70%", md: "520px" }, borderRadius: "4px", }]}>
                <div className='txt-title-modal-add-conv'>Ajouter domiciliation</div>

                {/* Article de la convention */}
                <TextField
                    id="outlined-input-axe-name"
                    type="number"
                    InputProps={{
                        inputProps: { min: 0 }
                    }}
                    label="Article de la convention"
                    value={articleConvention}
                    onChange={handleChangeInputArticleConvention}
                    // helperText="Please select your currency"
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                    size="medium"
                />

                {/* Organisme beneficiaire */}
                <TextField
                    id="outlined-input-nbr-domaine"
                    label="Organisme bénéficiaire"
                    value={organismeBeneficiaire}
                    onChange={handleChangeInputOrganismeBeneficiaire}
                    // helperText="Please select your currency"
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                    size="medium"
                />
                {/* RIB */}
                <TextField
                    id="outlined-input-nbr-prog-proj"
                    label="RIB"
                    value={rib}
                    onChange={handleChangeInputRib}
                    // helperText="Please select your currency"
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                    size="medium"
                />
                {/* Autres informations */}
                <TextField
                    id="outlined-input-Autres-informations"
                    label="Autres informations"
                    value={autresInformations}
                    onChange={handleChangeInputAutresInformations}
                    // helperText="Please select your currency"
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                    size="medium"
                />
                <div className='footer-modal-add-conv'>
                    <MainButton onClick={onClickClose} className="btn-modal-annuler-axe" label='Annuler' />
                    <MainButton onClick={() => onClickAdd({ id: Date.now().toString(), articleConvention: parseInt(articleConvention), organismeBeneficiaire: organismeBeneficiaire, rib: rib, autreInfo: autresInformations })} className="btn-modal-add-axe" label='Ajouter' />
                </div>

            </Box>
        </Modal>
    );
}

export default ModalAjouterDomiciliation;