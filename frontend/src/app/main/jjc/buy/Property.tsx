import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import PropertyMap from './PropertyMap';
import PropertyCards from './PropertyCards';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.divider
	},
	'& .FusePageSimple-content': {},
	'& .FusePageSimple-sidebarHeader': {},
	'& .FusePageSimple-sidebarContent': {}
}));

function Property() {
	const { t } = useTranslation('propertyPage');

	return (
		<Root
			header={
				<div className="p-24">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Comprar</h4>
					<br />
					<p>Aqu&iacute; se mostrar&aacute;n las propiedades a vender.......</p>
					<PropertyCards />
				</div>
			}
			rightSidebarContent={<PropertyMap />}
			rightSidebarOpen
			rightSidebarVariant="permanent"
			rightSidebarWidth={800}
		/>
	);
}

export default Property;
