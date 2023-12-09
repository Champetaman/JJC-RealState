import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';

import CarouselCard from './ImagesCarousel';

function PropertyCards() {
	return (
		<Card>
			<CardContent>
				<CarouselCard />
			</CardContent>

			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}

export default PropertyCards;
