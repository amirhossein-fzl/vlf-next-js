import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchAjax(props) {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState(false);

    return (
        <div className={props.className}>
            <Col>
                <Container>
                    <div className="flex" style={searchResult ? { position: 'relative', zIndex: 1051 } : null}>
                        <div className="w-full border-2 border-solid border-blue-400 duration-200 rounded-full flex py-1.5 px-5 items-center" style={searchResult ? { borderColor: 'bg-blue-500' } : null}>
                            <InputBase className="w-full text-blue-500" placeholder="سرچ ..." color="secondary" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setSearchResult(true)} />
                        </div>
                        <IconButton className="!text-white !bg-blue-500 hover:bg-blue-500 !mr-2.5" size="large">
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <>
                        {searchResult ? (
                            <div
                                className="fixed z-[1050] w-full h-screen inset-0"
                                onClick={() => {
                                    setSearchResult(false);
                                }}
                            ></div>
                        ) : null}
                        <Grow in={searchResult} unmountOnExit>
                            <Paper elevation={3} className="mt-2 w-full p-2.5" style={{ zIndex: 1051, position: 'relative' }}>
                                <Grid container direction="column">
                                    <ButtonBase className="!rounded-theme !py-1.5 !px-3 !mt-1.5 text-left block !text-blue-500 !bg-blue-100">
                                        <Grid container justifyContent="space-between" alignItems="center">
                                            <Typography variant="body1">آپشن 1</Typography>
                                            <span className="font-['IRANSans'] bg-pink-500 text-white py-0.5 px-2 rounded-2xl text-sm">در وبلاگ</span>
                                        </Grid>
                                    </ButtonBase>

                                    <ButtonBase className="!rounded-theme !py-1.5 !px-3 !mt-1.5 text-left block !text-blue-500 !bg-blue-100">
                                        <Grid container justifyContent="space-between" alignItems="center">
                                            <Typography variant="body1">آپشن 2</Typography>
                                            <span className="font-['IRANSans'] bg-pink-500 text-white py-0.5 px-2 rounded-2xl text-sm">در دوره ها</span>
                                        </Grid>
                                    </ButtonBase>

                                    <ButtonBase className="!rounded-theme !py-1.5 !px-3 !mt-1.5 text-left block !text-blue-500 !bg-blue-100">
                                        <Grid container justifyContent="space-between" alignItems="center">
                                            <Typography variant="body1">آپشن 3</Typography>
                                            <span className="font-['IRANSans'] bg-pink-500 text-white py-0.5 px-2 rounded-2xl text-sm">در وبلاگ</span>
                                        </Grid>
                                    </ButtonBase>
                                </Grid>
                            </Paper>
                        </Grow>
                    </>
                </Container>
            </Col>
        </div>
    );
}
