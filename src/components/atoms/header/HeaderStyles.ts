import { makeStyles } from '@mui/styles';

export default makeStyles((theme: any) => ({
  appbar: {
    backgroundColor: '#1c2033 !important',
    backgroundImage: `
      radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%),
      radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%),
      radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
`,
    borderBottom:'0px !important',
    color: '#fff',
  },
  spacer: {
    flex: 1,
  },
  toolbarMargin: {
    marginBottom: '4rem',
  },
}));