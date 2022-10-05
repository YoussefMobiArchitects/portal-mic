import { Grid } from '@mui/material';
import React from 'react';
import {
    ItemProjet,
} from '../../../../../components';
import { useAppSelector } from '../../../../../hooks';
import { ItemProjetConsulterConvI } from '../../../../../models/itemProjetConsulterConv';

function Section3() {

    const list_projet_impliquant_ministere_store = useAppSelector((state) => state.consulterConvReducer.list_projet_impliquant_ministere);


    return (
        <div style={{ width: "100%" }}>
            <Grid container spacing={3}>
                {list_projet_impliquant_ministere_store.map((item: ItemProjetConsulterConvI, index: number) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index.toString()}>
                            <ItemProjet
                                id={item.id}
                                idStatus={item.idStatus}
                                status={item.status}
                                txtColorStatus={item.txtColorStatus}
                                bgColorStatus={item.bgColorStatus}
                                titleProjet={item.titleProjet}
                                coutGlobal={item.coutGlobal}
                                contribution={item.contribution}
                                situationDeblocage={item.situationDeblocage}
                                dateDerniereSituation={item.dateDerniereSituation}
                            />
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    );
}

export default Section3;