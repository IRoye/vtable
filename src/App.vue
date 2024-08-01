<!--
 * @Description: v-table使用
 * @Author: yuyi
 * @Date: 2024-07-30 23:09:56
 * @LastEditors: yuyi
 * @LastEditTime: 2024-07-31 09:48:39
-->
import { defineComponent } from 'vue';
import { ElDialog, ElRow, ElCol, ElCheckbox, ElCheckboxGroup, ElButton, ElScrollbar } from 'element-plus';
import Draggable from 'vuedraggable';

export default defineComponent({
  name: 'DialogComponent',
  data() {
    return {
      dialogFlag: false,
      checkAll: false,
      checkList: [],
      localColumnArray: [],
      drag: false,
      vtableDragPoint: '', // Replace with your image source
      vtableDragPointGrey: '', // Replace with your image source
      vtableDragClose: '', // Replace with your image source
      fieldKey: 'label', // or 'prop', depending on your logic
      dragOptions: {}, // Options for draggable
    };
  },
  methods: {
    handleCheckAllChange() {
      // Your logic here
    },
    checkChange() {
      // Your logic here
    },
    onMove() {
      // Your logic here
    },
    closeTag(item) {
      // Your logic here
    },
    resetTable() {
      // Your logic here
    },
    submit() {
      // Your logic here
    },
  },
  render() {
    return (
      <ElDialog
        v-model={this.dialogFlag}
        class="dialog-change_container"
        title="设置显示字段"
        width="60%"
        closeOnClickModal={false}
        closeOnPressEscape={false}
        appendToBody
      >
        <ElRow class="config-column_contain">
          <ElCol span={18}>
            <ElCheckbox
              v-model={this.checkAll}
              class="config-column_checkbox-item"
              onChange={this.handleCheckAllChange}
            >
              全选
            </ElCheckbox>
            <ElCheckboxGroup v-model={this.checkList} onChange={this.checkChange}>
              <div class="config-column_checkbox-group">
                {this.localColumnArray.map((item, index) => (
                  <div key={index}>
                    {this.fieldKey === 'label' ? (
                      <ElCheckbox
                        size="default"
                        title={item.label}
                        class="config-column_checkbox-item"
                        disabled={item.require}
                        label={item.label}
                      />
                    ) : (
                      <ElCheckbox
                        size="default"
                        title={item.label}
                        class="config-column_checkbox-item"
                        disabled={item.require}
                        label={item.prop}
                      >
                        {item.label}
                      </ElCheckbox>
                    )}
                  </div>
                ))}
              </div>
            </ElCheckboxGroup>
          </ElCol>
          <ElCol span={6} class="config-column_right">
            <text-tips text="拖动可改变列顺序" class="config-column_right-tips" />
            <ElScrollbar style={{ height: 'calc(80vh - 200px)', overflowY: 'auto' }}>
              <Draggable
                v-model={this.localColumnArray}
                class="list-group"
                {...this.dragOptions}
                group="people"
                filter=".config-column_fixed-item"
                move={this.onMove}
                tag="transition-group"
                itemKey="item.kid"
                onStart={() => (this.drag = true)}
                onEnd={() => (this.drag = false)}
              >
                {{
                  item: ({ element }) => (
                    <div
                      class={[
                        'config-column_right-drag-card',
                        { 'config-column_fixed-item': element.fixed },
                      ]}
                    >
                      {element.isShow && (
                        <div size="default" class="config-column_right-drag-item">
                          <img
                            src={element.fixed ? this.vtableDragPointGrey : this.vtableDragPoint}
                            style={{ marginLeft: '10px' }}
                          />
                          <span
                            class="config-column_right-drag-text"
                            title={`${element.label}${
                              element.fixed ? '(固定列禁止拖动)' : ''
                            }`}
                          >
                            {element.label}
                          </span>
                          <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                            {!element.require && (
                              <img
                                src={this.vtableDragClose}
                                class="config-column_right-drag-close"
                                onClick={() => this.closeTag(element)}
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ),
                }}
              </Draggable>
            </ElScrollbar>
          </ElCol>
        </ElRow>
        <template v-slot:footer>
          <div>
            <ElButton
              size="default"
              title="回到初始"
              type="primary"
              style={{ float: 'left' }}
              onClick={this.resetTable}
            >
              重置
            </ElButton>
            <ElButton class="dialog_cancel-btn" size="default" onClick={() => (this.dialogFlag = false)}>
              取消
            </ElButton>
            <ElButton type="primary" class="dialog_submit-btn" size="default" onClick={this.submit}>
              确定
            </ElButton>
          </div>
        </template>
      </ElDialog>
    );
  },
});

