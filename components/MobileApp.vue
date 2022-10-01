<template>
	<v-container>
			<v-row>
				<v-col 
					md="6" 
					cols="12" 
					class="d-flex"
				>
					<v-card 
						elevation="12" 
						class="mobile-thumbnail-size" 
						shaped
					>
						<v-img 
							contain 
							alt="mobile calc" 
							:src="require(`~/assets/images/android_app/${imageURL.calc}.png`)"
						>
						</v-img>
						<v-card-subtitle>Simple Calculator</v-card-subtitle>
					</v-card>
				</v-col>
				<v-col 
					md="6" 
					cols="12" 
					class="d-flex"
				>
					<v-card 
						elevation="12" 
						class="mobile-thumbnail-size" 
						shaped
					>
						<v-img 
							contain 
							alt="mobile dice" 
							:src="require(`~/assets/images/android_app/${imageURL.dice}.png`)"
						>
						</v-img>
						<v-card-subtitle>Roll a Dice</v-card-subtitle>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
</template>

<script>
export default {
	name: 'MobileApp',
	data: () => ({
		imageURL: { 
			calc: 'calculator', 
			dice: 'roll_dice_start' 
		},
	}),
}
</script>