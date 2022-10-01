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
						shaped
					>
						<v-img 
							contain 
							alt="inventory" 
							:src="require(`~/assets/thumbnail/${imageURL.inv}.JPG`)"
						>
						</v-img>
						<v-responsive content-class="d-flex">
							<v-card-subtitle class="font-weight-bold">Inventory (Laravel)</v-card-subtitle>
							<v-card-actions>
								<v-btn 
									to="/portfolio#inventory" 
									right 
									absolute 
									plain 
									text
								>
									Details
								</v-btn>
							</v-card-actions>
						</v-responsive>
					</v-card>
				</v-col>
				<v-col 
					md="6" 
					cols="12" 
					class="d-flex"
				>
					<v-card 
						elevation="12" 
						shaped
					>
						<v-img 
							contain 
							alt="menu ordering" 
							:src="require(`~/assets/thumbnail/${imageURL.menu}.JPG`)"
						>
						</v-img>
						<v-responsive content-class="d-flex">
							<v-card-subtitle class="font-weight-bold">Menu Ordering (Laravel)</v-card-subtitle>
							<v-card-actions>
								<v-btn 
									to="/portfolio#menuorder" 
									right 
									absolute 
									plain 
									text
								>
									Details
								</v-btn>
							</v-card-actions>
						</v-responsive>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col 
					md="6" 
					cols="12" 
					class="d-flex"
				>
					<v-card 
						elevation="12" 
						shaped
					>
						<v-img 
							contain 
							alt="onlineexam" 
							:src="require(`~/assets/thumbnail/${imageURL.online}.JPG`)"
						>
						</v-img>
						<v-responsive content-class="d-flex">
							<v-card-subtitle class="font-weight-bold">Online Examination (Laravel)</v-card-subtitle>
							<v-card-actions>
								<v-btn 
									to="/portfolio#onlineexam" 
									right 
									absolute 
									plain 
									text
								>
									Details
								</v-btn>
							</v-card-actions>
						</v-responsive>					
					</v-card>
				</v-col>
				<v-col 
					md="6" 
					cols="12" 
					class="d-flex"
				>
					<v-card 
						elevation="12" 
						shaped
					>
						<v-img 
							contain 
							alt="payroll" 
							:src="require(`~/assets/thumbnail/${imageURL.payroll}.JPG`)"
						>
						</v-img>
						<v-responsive content-class="d-flex">
							<v-card-subtitle class="font-weight-bold">Payroll (Laravel)</v-card-subtitle>
							<v-card-actions>
								<v-btn 
									to="/portfolio#payroll" 
									right 
									absolute 
									plain 
									text
								>
									Details
								</v-btn>
							</v-card-actions>
						</v-responsive>		
					</v-card>
				</v-col>
			</v-row>
		</v-container>
</template>

<script>
export default {
	name: 'WebApp',
	data: () => ({
		imageURL: { 
			inv: 'inventory_thumbnail', 
			menu: 'menuorder_thumbnail',
			online: 'onlineexam_thumbnail',
			payroll: 'payroll_thumbnail',
		},
	}),
}
</script>