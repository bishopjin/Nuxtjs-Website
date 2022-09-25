<template>
	<div 
		class="py-2" 
		v-resize="getScreenSize"
	>
		<v-card 
			shaped 
			elevation="12"
		>
			<v-card-title>{{ cardTitle }}</v-card-title>
			<v-container>
				<v-row>
					<v-col 
						md="7" 
						cols="12"
					>
						<v-card-text>{{ cardText }}</v-card-text>
						<v-card-actions class="justify-md-space-between">
							<v-btn 
								width="150" 
								color="success" 
								@click="showOverlay = !showOverlay"
								class="rounded-tl-xl rounded-br-xl d-md-flex d-none"
							>
								Screenshot
							</v-btn>
							<v-btn 
								:href="cardUrl" 
								target="_blank" 
								width="150" 
								color="primary" 
								class="rounded-tl-xl rounded-br-xl d-md-flex d-none"
							>
								Laravel Blade
							</v-btn>
							<!--  -->
							<v-btn 
								:href="vueUrl" 
								target="_blank" 
								width="150" 
								color="primary" 
								class="rounded-tl-xl rounded-br-xl d-md-flex d-none"
							>
								Vue Js
							</v-btn>
							<v-btn 
								:href="githubUrl" 
								target="_blank" 
								width="150" 
								color="secondary" 
								class="rounded-tl-xl rounded-br-xl d-md-flex d-none"
							>
								Source Code
							</v-btn>

							<!-- mobile -->
							<v-btn 
								icon 
								color="success" 
								class="d-md-none d-flex" 
								@click="showOverlay = !showOverlay"
							>
								<v-icon>mdi-monitor-screenshot</v-icon>
							</v-btn>
							<v-btn 
								:href="cardUrl" 
								target="_blank" 
								icon 
								color="primary" 
								class="d-md-none d-flex"
							>
								<v-icon>mdi-web</v-icon>
							</v-btn>
							<!--  -->
							<v-btn 
								:href="vueUrl" 
								target="_blank" 
								icon 
								color="primary" 
								class="d-md-none d-flex"
							>
								<v-icon>mdi-web</v-icon>
							</v-btn>
							<v-btn 
								:href="githubUrl" 
								target="_blank" 
								icon 
								color="secondary" 
								class="d-md-none d-flex"
							>
								<v-icon>mdi-github</v-icon>
							</v-btn>
						</v-card-actions>
					</v-col>
					<v-col 
						md="5" 
						cols="12"
					>
						<v-card 
							shaped 
							elevation="8"
						>
							<v-img 
								:alt="cardID" 
								:src="cardImageUrl" 
								contain
							>
							</v-img>
						</v-card>
					</v-col>
					<div :id="cardID"></div>
				</v-row>
			</v-container>
		</v-card>
		<!-- overlay -->
		<v-overlay v-if="showOverlay">
			<v-container>
				<v-row>
					<v-col>
						<v-btn 
							@click="showOverlay = !showOverlay" 
							class="mb-2" 
							color="secondary"
						>
							Close
						</v-btn>
						<v-card v-if="carouselAllowed">
							<v-card-text>
								Image carousel not available in mobile view, use desktop or laptop.
							</v-card-text>
						</v-card>
						<v-card v-else>
							<v-carousel :cycle="cycle">
							    <v-carousel-item
							      	v-for="(item,i) in imageObject"
							      	:key="i"
							      	:src="require(`~/assets/images/${item.src}`)"
							    ></v-carousel-item>
							</v-carousel>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-overlay>
	</div>
</template>

<script>
export default {
	data: () => ({
		githubUrl: 'https://github.com/',
		cycle: true,
		showOverlay: false,
		dialog: false,
		carouselAllowed: false,
		loading: false,
	}),
	props: {
		cardTitle: String,
		cardText: String,
		cardUrl: String,
		vueUrl: String,
		cardImageUrl: String,
		cardID: String,
		ssArray: new Object(),
	},
	computed: {
		imageObject() {
			return this.ssArray
		},
	},
	methods: {
		getScreenSize() {
			this.carouselAllowed = window.innerWidth < 1000 ? true : false
		}
	}
}
</script>