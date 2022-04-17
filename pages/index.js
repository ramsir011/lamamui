import { Stack, Item } from '@mui/material';
import AddIcon from '../components/AddIcon';
import Feed from '../components/Feed';
import Layout from '../components/Layout';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
export default function Home() {
  return (
    <Layout>
      <Stack spacing={2} direction="row">
        <SidebarLeft />
        <Feed />
        <SidebarRight />
      </Stack>
      <AddIcon/>
    </Layout>
  );
}
