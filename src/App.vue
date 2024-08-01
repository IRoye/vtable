<!--
 * @Description: 测试demo
 * @Author: yuyi
 * @Date: 2024-07-30 23:09:56
 * @LastEditors: yuyi
 * @LastEditTime: 2024-08-01 23:31:37
-->
<template>
	<v-table :data="tableData" style="width: 100%">
		<el-table-column fixed prop="date" label="Date" width="150" />
		<el-table-column prop="name" label="Name" width="120" />
		<el-table-column prop="state" label="State" width="120" />
		<el-table-column prop="city" label="City" width="120" />
		<el-table-column prop="address" label="Address" width="600" />
		<el-table-column prop="zip" label="Zip" width="120" />
		<el-table-column fixed="right" label="Operations" min-width="120">
			<template #default>
				<el-button link type="primary" size="small">
					Detail
				</el-button>
				<el-button link type="primary" size="small">Edit</el-button>
			</template>
		</el-table-column>
	</v-table>
</template>
<script>
import VTable from './components/VTable.vue'
export default {
	name: 'App',
	components: { VTable },
	data() {
		return {
			tableData: [
				{
					date: '2016-05-03',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles',
					zip: 'CA 90036',
					tag: 'Home',
				},
				{
					date: '2016-05-02',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles',
					zip: 'CA 90036',
					tag: 'Office',
				},
				{
					date: '2016-05-04',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles',
					zip: 'CA 90036',
					tag: 'Home',
				},
				{
					date: '2016-05-01',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles',
					zip: 'CA 90036',
					tag: 'Office',
				},
			]
		}
	}
}
</script>
