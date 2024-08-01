<!--
 * @Description: v-table组件
 * @Author: yuyi
 * @Date: 2024-07-30 23:31:17
 * @LastEditors: yuyi
 * @LastEditTime: 2024-08-01 22:58:35
-->
<script lang="jsx">
import { cloneDeep } from 'lodash'
export default {
    data() {
        return {
            table: null,
            reversedNodes: []
        };
    },
    methods: {

        swap(arr, i, j) {
            if (i === j || i < 0 || i >= arr.length || j < 0 || j >= arr.length) {
                console.error('Invalid indices');
                return;
            }
            [arr[i], arr[j]] = [arr[j], arr[i]];
        },

    },
    render() {
        // 获取默认插槽的VNode列表
        let vNodes = this.$slots.default()

        // 翻转VNode列表
        // vNodes.reverse()

        this.swap(vNodes, 0, 6)

        this.reversedNodes = [...vNodes]

        return (
            <el-table ref="table" {...this.$attrs}>
                {this.reversedNodes}
            </el-table>
        )
    }
}
</script>
