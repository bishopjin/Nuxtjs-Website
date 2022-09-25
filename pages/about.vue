<template>
	<div>
		<v-container>
			<v-row>
				<v-col 
					md="4" 
					cols="12"
				>
					<div class="position-absolute d-none d-md-flex">
						<div class="text-center">
							<v-avatar 
								rounded="50" 
								size="130" 
								color="black"
							>
								<v-img 
									alt="me" 
									contain 
									:src="require(`~/assets/images/${imageURL}.jpg`)"
								>
								</v-img>
							</v-avatar>
							<PersonalInfo/>
						</div>
					</div>
					<!-- mobile view -->
					<div class="d-flex d-md-none">
						<v-bottom-sheet 
							v-model="sheet" 
							persistent
						>
							<template v-slot:activator="{ on, attrs }">
								<v-btn 
									outlined 
									color="success" 
									rounded 
									v-bind="attrs" 
									v-on="on"
								>
									<v-avatar 
										rounded="50" 
										size="30" 
										class="me-2"
									>
										<v-img 
											alt="me" 
											contain 
											:src="require(`~/assets/images/${imageURL}.jpg`)"
										>
										</v-img>
									</v-avatar> 
									View Profile
								</v-btn>
							</template>
							<v-sheet>
								<v-container>
									<v-row>
										<v-col>
											<v-btn 
												@click="sheet = !sheet" 
												fixed 
												right 
												plain 
												text 
												link 
												class="me-n5 mt-n2"
											>
												<v-icon>mdi-close</v-icon>
											</v-btn>
										</v-col>
									</v-row>
									<v-row>
										<v-col 
											cols="12" 
											class="text-center"
										>
											<v-avatar 
												rounded="50" 
												size="100" 
												color="black"
											>
												<v-img 
													alt="me" 
													contain 
													:src="require(`~/assets/images/${imageURL}.jpg`)"
												>
												</v-img>
											</v-avatar>

											<PersonalInfo/>
										</v-col>
									</v-row>
								</v-container>
							</v-sheet>
						</v-bottom-sheet>
					</div>
				</v-col>
				<v-col 
					md="8" 
					cols="12"
				>
					<v-card 
						elevation="12" 
						shaped
					>
						<v-expansion-panels 
							mandatory 
							accordion
						>
							<v-expansion-panel>
								<v-expansion-panel-header class="font-weight-bold">
									Summary
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-list 
										dense 
										class="text-md-subtitle-2 text-subtitle-2"
									>
										<v-list-item>
											<v-list-item-content>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
												Nullam at vestibulum risus, in convallis mauris. In tincidunt est purus, 
												finibus dictum dolor laoreet eu. Fusce imperdiet quam id tempor sagittis. 
												Integer elementum sem ut auctor congue. Etiam mattis cursus nunc, ut mattis 
												tellus blandit auctor. Etiam aliquet ligula ut luctus tincidunt. Aenean eu 
												congue tellus. Suspendisse eleifend metus nec libero vehicula, et vehicula ante 
												placerat. Cras pellentesque purus in sagittis fringilla. Phasellus in turpis vitae 
												lectus fermentum porta. Sed interdum lobortis vulputate.
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
												Nullam at vestibulum risus, in convallis mauris. In tincidunt est purus, 
												finibus dictum dolor laoreet eu. Fusce imperdiet quam id tempor sagittis. 
												Integer elementum sem ut auctor congue. Etiam mattis cursus nunc, ut mattis 
												tellus blandit auctor. Etiam aliquet ligula ut luctus tincidunt. Aenean eu 
												congue tellus. Suspendisse eleifend metus nec libero vehicula, et vehicula ante 
												placerat. Cras pellentesque purus in sagittis fringilla. Phasellus in turpis vitae 
												lectus fermentum porta. Sed interdum lobortis vulputate.
											</v-list-item-content>
										</v-list-item>
									</v-list>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header class="font-weight-bold">
									Work Experience
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-list 
										dense 
										class="text-md-subtitle-2 text-subtitle-2"
									>
										<v-list-item>
											<v-list-item-content>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
												Nullam at vestibulum risus, in convallis mauris. In tincidunt est purus, 
												finibus dictum dolor laoreet eu. Fusce imperdiet quam id tempor sagittis. 
												Integer elementum sem ut auctor congue. Etiam mattis cursus nunc, ut mattis 
												tellus blandit auctor. Etiam aliquet ligula ut luctus tincidunt. Aenean eu 
												congue tellus. Suspendisse eleifend metus nec libero vehicula, et vehicula ante 
												placerat. Cras pellentesque purus in sagittis fringilla. Phasellus in turpis vitae 
												lectus fermentum porta. Sed interdum lobortis vulputate.
											</v-list-item-content>
										</v-list-item>
										<v-divider></v-divider>
										<v-list-item>
											<v-list-item-content>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
												Nullam at vestibulum risus, in convallis mauris. In tincidunt est purus, 
												finibus dictum dolor laoreet eu. Fusce imperdiet quam id tempor sagittis. 
												Integer elementum sem ut auctor congue. Etiam mattis cursus nunc, ut mattis 
												tellus blandit auctor. Etiam aliquet ligula ut luctus tincidunt. Aenean eu 
												congue tellus. Suspendisse eleifend metus nec libero vehicula, et vehicula ante 
												placerat. Cras pellentesque purus in sagittis fringilla. Phasellus in turpis vitae 
												lectus fermentum porta. Sed interdum lobortis vulputate.
											</v-list-item-content>
										</v-list-item>
									</v-list>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header class="font-weight-bold">
									Skills
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-list 
										dense 
										class="text-md-subtitle-2 text-subtitle-2"
									>
										<v-list-item>
											<v-list-item-content>
												Laravel PHP Framework
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content>
												VueJs, Javascript, jQuery
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content>
												HTML, Bootstrap, CSS
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content>
												SQL Database schema design
											</v-list-item-content>
										</v-list-item>
										
									</v-list>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header class="font-weight-bold">
									Interest
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-list 
										dense 
										class="text-md-subtitle-2 text-subtitle-2"
									>
										<v-list-item>
											<v-list-item-content>
												Cloud based computing
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content>
												Game Design and development using Blender 3D and Unity 3D
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content>
												Internet of things (IOT) and web security
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content>
												Artificial Intelligence (AI) using machine learning and deep learning
											</v-list-item-content>
										</v-list-item>
										
									</v-list>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import PersonalInfo from '../components/PersonalInfo.vue'
export default {
	data: () => ({
		sheet: false,
		imageURL: 'meImage',
	}),
	head: () => ({
		title: 'About',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Personal website, VueJs, NuxtJs'
			}
		],
	}),
	components: {
		PersonalInfo,
	},
}
</script>
