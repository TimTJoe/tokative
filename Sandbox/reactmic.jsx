const [record, setRecord] = useState(false)

const startRecord = () => { setRecord(!record) }
const onData = (blob) => { console.log("Realtime data : " + JSON.stringify(blob)) }
const onStop = (blob) => { console.log("Recorded data: " + JSON.stringify(blob)) }


<ReactMic
    record={record}
    onStop={onStop}
    onData={onData}
    strokeColor={"black"}
    backgroundColor={"blue"}
/>

{/* <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        message={`${hostName} is calling`}
        action={
          <>
            <Button
              variant='contained'
              color='success'
              size='small'
              endIcon={<Phone />}
              disableElevation>Answer</Button>
            <IconButton
              size="small"
              aria-label="close"
              color="error"
              onClick={handleClose}>
              <Close fontSize="small" />
            </IconButton>
          </>
        }
      /> */}