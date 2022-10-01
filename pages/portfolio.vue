<template>
	<div>
		<v-container>
			<v-row>
				<v-col>
					<Project 
						v-for="(item, i) in projects" 
						:key="i" 
						:cardTitle="item.name" 
						:cardID="item.idLabel" 
						:cardImageUrl="require(`~/assets/thumbnail/${item.imageUrl}.JPG`)" 
						:cardText="item.text" 
						:cardUrl="item.url" 
						:vueUrl="item.vueUrl"
						:ssArray="item.imgArr"
					/>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'Portfolio',
	data: () => ({
		bladeUrl: 'https://laravelwebapp.genesedan.com/',
		vueUrl: 'https://vuejsapp.genesedan.com/',
	}),
	head: () => ({
		title: 'Portfolio',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Personal website, VueJs, NuxtJs'
			}
		],
	}),
	computed: {
		projects() {
			let projObj = [
				{
					name: 'Inventory',
					idLabel: '#inventory',
					imageUrl: 'inventory_thumbnail',
					url: this.bladeUrl,
					vueUrl: this.vueUrl,
					text: `Monitor the stock of product from your storage, add new item, order and add stock to the inventory. 
							Monitor employee login and logout, serve also as daily time recorder.
							Edit user access from non-admin to admin access and enable/disable user access to the system.`,
					imgArr: [
						{ src: 'inventory/inventory-dashboard.png' }, 
						{ src: 'inventory/inventory-add-new-product.JPG' },
						{ src: 'inventory/inventory-delivery.JPG' },
						{ src: 'inventory/inventory-employee-change-access.JPG' },
						{ src: 'inventory/inventory-employee-edit.JPG' },
						{ src: 'inventory/inventory-employee-log.JPG' },
						{ src: 'inventory/inventory-item-request.JPG' },
						{ src: 'inventory/inventory-login.JPG' },
						{ src: 'inventory/inventory-register.JPG' },
					],
				},
				{
					name: 'Simple Menu Ordering',
					idLabel: '#menuorder',
					imageUrl: 'menuorder_thumbnail',
					url: this.bladeUrl,
					vueUrl: this.vueUrl,
					text: `Simple online menu ordering, where user can select an item from the menu, 
						set the quantity of the order and input the coupon code for discount. The system also 
						apply tax for the total amount of order. A summary of order will be displayed after placing 
						the order and recorded upon confirmation. Summary of all the order made are also displayed, where the user can see all his previous order.`,
					imgArr: [
						{ src: 'menuorder/menu-ordering-index.png' }, 
						{ src: 'menuorder/menu-ordering-login.JPG' },
						{ src: 'menuorder/menu-ordering-order-details.JPG' },
						{ src: 'menuorder/menu-ordering-order-summary.JPG' },
						{ src: 'menuorder/menu-ordering-register.JPG' },
					],
				},
				{
					name: 'Online Examination',
					idLabel: '#onlineexam',
					imageUrl: 'onlineexam_thumbnail',
					url: this.bladeUrl,
					vueUrl: this.vueUrl,
					text: `Create an online examination for the student. Faculty can create an examination 
						form based on subject and generate an examination code. This code will serve as an 
						access for the student to take the examination. Correct answer to the question is encrypted 
						before storing it in the database, so only the user created the exam knows the correct answer.`,
					imgArr: [
						{ src: 'onlineexam/online-exam-admin-add-course.JPG' }, 
						{ src: 'onlineexam/online-exam-dashboard.png' }, 
						{ src: 'onlineexam/online-exam-edit-profile.JPG' }, 
						{ src: 'onlineexam/online-exam-faculty-add-new-subject.JPG' }, 
						{ src: 'onlineexam/online-exam-faculty-create-exam-form.JPG' }, 
						{ src: 'onlineexam/online-exam-faculty-dashboard.JPG' }, 
						{ src: 'onlineexam/online-exam-faculty-exam-form-generated.JPG' }, 
						{ src: 'onlineexam/online-exam-faculty-exam-form-preview.JPG' }, 
						{ src: 'onlineexam/online-exam-login.JPG' }, 
						{ src: 'onlineexam/online-exam-register.JPG' }, 
						{ src: 'onlineexam/online-exam-student-dashboard.JPG' }, 
						{ src: 'onlineexam/online-exam-student-examination.JPG' }, 
					],
				},
				{
					name: 'Payroll',
					idLabel: '#payroll',
					imageUrl: 'payroll_thumbnail',
					url: this.bladeUrl,
					vueUrl: this.vueUrl,
					text: `Simple payroll system with maintenance page and daily time recorder, etc.`,
					imgArr: [
						{ src: 'payroll/add_dashboard_item.JPG' }, 
						{ src: 'payroll/admin_dashboard.JPG' },
						{ src: 'payroll/dtr.JPG' },
						{ src: 'payroll/edit_dashboard_item.JPG' },
						{ src: 'payroll/none_admin_dashboard.JPG' },
						{ src: 'payroll/registration.JPG' },
					],
				}
			]
			return projObj
		}
	}
}
</script>