import { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, Paper, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import PropTypes from 'prop-types';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function DocumentViewPopup({ open, handleClose, documentURL, buttonDisabled, setButtonDisabled }) {
  const [fileName, setFileName] = useState(null);

  const getFilePluginInstance = getFilePlugin({
    fileNameGenerator: () => {
      return fileName;
    }
  });

  const { Download } = getFilePluginInstance;

  const handleDownloadButton = (props) => {
    //eslint-disable-next-line
    props.onClick();
    handleClose();
  }

  useEffect(() => {
    setFileName(null);
    if (documentURL) {
      setFileName(documentURL.split('/').pop());
    }
  }, [documentURL]);

  return (
    <BootstrapDialog
      maxWidth={false}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <Paper elevation={3} sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', px: 4, pt: 2, height: '100%' }}>
        <DialogActions>
          <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '1000px', height: '80vh' }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              {documentURL && <Viewer fileUrl={documentURL} defaultScale={1.5} plugins={[getFilePluginInstance]}
                onDocumentLoad={() => {
                  setButtonDisabled(false);
                }}
                onDocumentError={() => {
                  setButtonDisabled(true);
                }}
              />}
            </Worker>
          </Box>
        </DialogActions>
        <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%', width: '100%' }}>
          <Download>
            {(props) => (
              <Button variant="contained" sx={{ m: 2, textTransform: 'none', width: 'fit-content', height: 'fit-content' }} disabled={buttonDisabled} onClick={() => handleDownloadButton(props)}>Descargar</Button>
            )}
          </Download>
        </Box>
      </Paper>
    </BootstrapDialog>
  )
}


DocumentViewPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  documentURL: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  setButtonDisabled: PropTypes.func.isRequired
}