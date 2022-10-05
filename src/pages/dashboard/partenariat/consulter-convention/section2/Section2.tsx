import { Grid } from '@mui/material';
import React from 'react';
import { ConventionItem } from '../../../../../components';
import { useAppSelector } from '../../../../../hooks';
import { Convention } from '../../../../../models/convention';

function Section2() {

    const list_convention_en_lien_avec_convention_cadre_store = useAppSelector((state) => state.consulterConvReducer.list_convention_en_lien_avec_convention_cadre);


    return (
        <div style={{ width: "100%" }}>
            <Grid container spacing={3}>
                {list_convention_en_lien_avec_convention_cadre_store.map((item: Convention, index: number) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                            <ConventionItem
                                dateUpdate={item.dateUpdate}
                                isDimensionRoyale={item.isDimensionRoyale}
                                idTypeConvention={item.idTypeConvention}
                                typeConvention={item.typeConvention}
                                txtColorTypeConvention={item.txtColorTypeConvention}
                                backgroundColorTypeConvention={item.backgroundColorTypeConvention}
                                idStatusConvention={item.idStatusConvention}
                                statusConvention={item.statusConvention}
                                txtColorStatusConvention={item.txtColorStatusConvention}
                                backgroundColorStatusConvention={item.backgroundColorStatusConvention}
                                description={item.description}
                                dateSignature={item.dateSignature}
                                onClickRenseigner={() => console.log(item.id)}
                                onClickSupprimer={() => console.log(item.id)}
                                onClickConsulter={() => console.log(item.id)}
                                isShowBtns={false}
                            />
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    );
}

export default Section2;