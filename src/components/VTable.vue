<!--
 * @Description: v-table组件
 * @Author: yuyi
 * @Date: 2024-07-30 23:31:17
 * @LastEditors: yuyi
 * @LastEditTime: 2024-08-01 23:39:37
-->
<script lang="jsx">
export default {
    data() {
        return {

        }
    },
    render() {
        // 获取默认插槽的VNode列表
        let vNodes = this.$slots.default()
        return (
            <el-table ref="table" {...this.$attrs}>
                {vNodes}
            </el-table>
        )
    }
}
</script>
