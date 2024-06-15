export default {
  app: {
    aside: {
      stableVersion: '稳定版',
      latestVersion: '尝鲜版',
      menu: {
        guide: '开发指南',
        globalInstall: '全局安装',
        demandLoading: '按需加载',
        globalConfig: '全局参数',
        globalTheme: '全局主题',
        globalIcon: '全局图标',
        GlobalZIndex: '全局 z-index',
        i18n: '国际化',
        tools: '工具类',
        clipboard: '剪贴板',
        baseTitle: '基础组件',
        navigationTitle: '导航组件',
        layoutTitle: '容器组件',
        feedbackTitle: '反馈组件',
        formTitle: 'Form 表单',
        form: {

        },
        dataTitle: '表单组件',
        tableTitle: 'Table 表格',
        table: {
          name: 'Table 基础表格'
        },
        grid: {
          name: 'Grid 配置式表格'
        },
        modalTitle: 'Modal 弹窗',
        modal: {

        },
        otherTitle: '其他组件',
        designTitle: '可视化'
      }
    },
    header: {
      moreProducts: '生态',
      enterpriseVersion: '企业版',
      supportUs: '支持我们'
    },
    base: {
      light: '白天',
      dark: '夜间'
    },
    layout: {
      apiSearch: '搜索 {0} API'
    },
    version: {
      v4: 'v4.x (vue 3.x 最新版)',
      v3: 'v3.x (vue 2.6+ 长期维护版)'
    },
    docs: {
      button: {
        viewCode: '查看代码',
        runDemo: '在线运行',
        fixDocs: '发现错误',
        fixDocTip: '如果该文档存在错误或者不详细，可以通过提交 PR 方式帮助完善文档！',
        copyCode: '复制代码',
        showCode: '显示代码',
        showTsCode: '显示TS',
        showJsCode: '显示JS',
        hideCode: '隐藏代码'
      }
    }
  },
  api: {
    apiSearch: 'API 搜索',
    enterpriseVersion: '企业版',
    title: {
      prop: '属性',
      desc: '说明',
      type: '类型 / 返回类型',
      enum: '可选值',
      defVal: '默认值 / 参数',
      version: '兼容性',
      Props: '参数',
      Events: '事件',
      Slots: '插槽',
      Methods: '方法'
    }
  },
  components: {
    'vxe-anchor': {
      Props_modelValue: '',
      Props_options: '',
      Props_container: '',
      Props_showMarker: ''
    },
    'vxe-anchor-link': {
      Props_content: '',
      Props_title: '',
      Props_href: ''
    },
    'vxe-breadcrumb': {},
    'vxe-breadcrumb-item': {},
    'vxe-button': {
      Props_content: '',
      Props_mode: '',
      Props_title: '',
      Props_type: '',
      Props_size: '',
      Props_name: '',
      Props_icon: '',
      Props_round: '圆角边框',
      Props_circle: '圆角按钮',
      Props_status: '',
      Props_disabled: '',
      'Props_class-name': '给展示容器附加 className',
      'Props_popup-class-name': '给下拉容器附加 className',
      Props_loading: '',
      Props_placement: '',
      'Props_destroy-on-close': '在下拉容器关闭时销毁内容',
      Props_transfer: '',
      Slots_default: '按钮内容',
      Slots_icon: '自定义图标',
      Slots_dropdowns: '下拉按钮',
      Events_click: '在单击按钮时触发该事件',
      'Events_dropdown-click': '下拉列表按钮点击时会触发该事件',
      Methods_focus: '使按钮获取焦点',
      Methods_blur: '使按钮失去焦点'
    },
    'vxe-button-group': {
      Props_mode: '',
      Props_size: '',
      Props_status: '',
      Props_round: '圆角边框',
      Props_circle: '圆角按钮',
      Props_disabled: '',
      'Props_class-name': '给展示容器附加 className',
      Props_options: '按钮列表',
      Props_options_content: '',
      Props_options_mode: '',
      Props_options_title: '',
      Props_options_type: '',
      Props_options_size: '',
      Props_options_name: '',
      Props_options_icon: '',
      Props_options_round: '圆角边框',
      Props_options_circle: '圆角按钮',
      Props_options_status: '',
      Props_options_disabled: '',
      'Props_options_class-name': '给展示容器附加 className',
      Props_options_loading: '',
      Events_click: '在单击按钮时触发该事件'
    },
    'vxe-calendar': {},
    'vxe-card': {},
    'vxe-checkbox': {
      Props_modelValue: '',
      Props_label: '',
      Props_content: '内容（支持开启国际化）',
      Props_size: '',
      Props_disabled: '',
      Props_title: '',
      Props_indeterminate: '',
      'Props_checked-value': '选中时的值',
      'Props_unchecked-value': '未选中时的值',
      Events_change: '在值发生改变时触发该事件'
    },
    'vxe-checkbox-group': {
      Props_modelValue: '',
      Props_max: '限制最大可选数量，默认无限制',
      Props_size: '',
      Props_disabled: '是否禁用',
      Props_options: '选项列表',
      'Props_option-props': '选项属性参数配置'
    },
    'vxe-col': {},
    'vxe-collapse': {},
    'vxe-collapse-pane': {},
    'vxe-date-picker': {},
    'vxe-drawer': {
      Props_modelValue: '',
      Props_size: '',
      Props_loading: '',
      Props_title: '',
      Props_className: '给窗口附加 className',
      Props_content: '',
      'Props_show-cancel-button': '是否显示取消按钮',
      'Props_cancel-button-text': '只对 type=confirm 有效，取消按钮的文本内容',
      'Props_show-confirm-button': '是否显示取消按钮',
      'Props_confirm-button-text': '只对 type=alert|confirm 有效，确定按钮的文本内容',
      Props_showHeader: '',
      Props_showFooter: '',
      'Props_lock-view': '',
      'Props_lock-scroll': '',
      Props_mask: '',
      'Props_mask-closable': '',
      'Props_esc-closable': '',
      'Props_show-close': '是否显示关闭按钮',
      Props_width: '',
      Props_height: '',
      Props_position: '',
      Props_zIndex: '',
      'Props_show-title-overflow': '',
      Props_transfer: '是否将弹框容器插入于 body 内',
      'Props_destroy-on-close': '',
      'Props_before-hide-method': '在窗口隐藏之前执行，可以返回 Error 阻止关闭，支持异步',
      Slots_default: '窗口内容模板',
      Slots_header: '窗口头部的模板（如果使用了，则 solt title 无效）',
      Slots_title: '窗口标题的模板',
      Slots_corner: '窗口右上角的模板',
      Slots_footer: '窗口底部的模板',
      Events_show: '在窗口显示时会触发该事件',
      Events_hide: '在窗口隐藏时会触发该事件',
      Events_confirm: '点击确定按钮时会触发该事件',
      Events_cancel: '点击取消按钮时会触发该事件',
      Events_close: '点击关闭按钮时会触发该事件',
      Methods_open: '手动打开窗口',
      Methods_close: '手动关闭窗口',
      Methods_getBox: '获取当前窗口元素'
    },
    'vxe-form': {
      Props_data: '',
      Props_loading: '',
      Props_span: '',
      Props_align: '',
      Props_size: '',
      'Props_title-align': '',
      'Props_title-width': '',
      'Props_title-colon': '',
      'Props_title-asterisk': '',
      'Props_title-overflow': '',
      Props_vertical: '所有项使用垂直布局',
      'Props_class-name': '给表单附加 className',
      'Props_collapse-status': 'v-model 绑定值，折叠状态',
      'Props_custom-layout': '是否使用自定义布局',
      Props_items: '项列表',
      Props_items_field: '',
      Props_items_title: '',
      Props_items_span: '',
      Props_items_align: '',
      Props_items_titleAlign: '',
      Props_items_titleWidth: '',
      Props_items_titleColon: '是否显示标题冒号',
      Props_items_titleAsterisk: '是否显示必填字段的红色星号',
      Props_items_titleOverflow: '',
      Props_items_showTitle: '是否显示标题',
      Props_items_vertical: '使用垂直布局',
      Props_items_className: '给表单项附加 className',
      Props_items_contentClassName: '给表单项内容附加 className',
      Props_items_contentStyle: '给表单项内容附加样式',
      Props_items_visible: '',
      Props_items_visibleMethod: '',
      Props_items_folding: '',
      Props_items_collapseNode: '',
      Props_items_titlePrefix: '',
      Props_items_titlePrefix_content: '提示消息（支持开启国际化）',
      Props_items_titlePrefix_message: '请使用 content',
      Props_items_titlePrefix_enterable: '只对 message 设置后有效，鼠标是否可进入到 tooltip 中',
      Props_items_titlePrefix_theme: '只对 message 设置后有效，设置 tooltip 的主题样式',
      Props_items_titlePrefix_icon: '自定义图标',
      Props_items_titleSuffix: '',
      Props_items_titleSuffix_content: '提示消息（支持开启国际化）',
      Props_items_titleSuffix_message: '请使用 content',
      Props_items_titleSuffix_enterable: '只对 message 设置后有效，鼠标是否可进入到 tooltip 中',
      Props_items_titleSuffix_theme: '只对 message 设置后有效，设置 tooltip 的主题样式',
      Props_items_titleSuffix_icon: '自定义图标',
      Props_items_resetValue: '',
      Props_items_itemRender: '',
      Props_items_itemRender_name: '渲染器名称',
      Props_items_itemRender_enabled: '是否启用',
      Props_items_itemRender_props: '渲染的参数（请查看自定义的 Props）',
      Props_items_itemRender_options: '只对 name=select 有效，下拉选项列表',
      Props_items_itemRender_optionProps: '只对 name=select 有效，下拉选项属性参数配置',
      Props_items_itemRender_optionGroups: '只对 name=select 有效，下拉分组选项列表',
      Props_items_itemRender_optionGroupProps: '只对 name=select 有效，下拉分组选项属性参数配置',
      Props_items_itemRender_events: '渲染组件的事件（请查看自定义的 Events）',
      Props_items_itemRender_content: '渲染组件的内容（仅用于特殊组件）',
      Props_items_itemRender_defaultValue: '项默认值',
      Props_items_children: '项集合',
      Props_items_slots: '',
      Props_items_slots_default: '自定义表单项',
      Props_items_slots_title: '自定义标题',
      Props_rules: '',
      Props_rules_required: '是否必填',
      Props_rules_min: '校验值最小长度（如果 type=number 则比较值大小）',
      Props_rules_max: '校验值最大长度（如果 type=number 则比较值大小）',
      Props_rules_type: '数据校验的类型',
      Props_rules_pattern: '正则校验',
      Props_rules_validator: '自定义校验方法，返回一个 Error 或者 Promise<new Error("提示消息")>',
      Props_rules_message: '校验提示内容（支持开启国际化）',
      Props_rules_trigger: '触发校验方式（如果为空，则为常规校验方式； 如果指定触发方式，则只会在匹配情况下进行校验）',
      Props_rules_maxWidth: '提示框的最大宽度（对于某些特殊场景可能会用到）',
      'Props_prevent-submit': '是否禁用默认的回车提交方式，禁用后配合 validate() 方法可以更加自由的控制提交逻辑',
      'Props_valid-config': '检验配置项',
      'Props_valid-config_autoPos': '是否自动定位到校验不通过的项',
      'Props_valid-config_showMessage': '是否显示错误显示',
      Events_submit: '只对 prevent-submit=false 有效，表单提交时会触发该事件',
      'Events_submit-invalid': '只对 prevent-submit=false 有效，表单提交时如果校验不通过会触发该事件',
      Events_reset: '表单重置时会触发该事件',
      'Events_toggle-collapse': '即将废弃，请使用 collapse',
      Events_collapse: '当折叠按钮被手动点击时会触发该事件',
      Methods_reset: '重置表单',
      Methods_validate: '对表单进行校验',
      Methods_validateField: '对表单指定项进行校验，支持同时校验多个字段',
      Methods_clearValidate: '手动清除校验状态，如果指定 field 则清除指定的项，否则清除整个表单',
      Methods_updateStatus: '更新项状态（当使用自定义渲染时可能会用到）',
      Methods_toggleCollapse: '只对 collapse-node 有效，手动切换折叠状态',
      Methods_getItems: '获取表单项列表'
    },
    'vxe-form-design': {
      Props_size: '',
      Props_height: '',
      Props_widgets: '',
      Props_formConfig: '',
      Props_formRender: '',
      Props_formRender_name: ''
    },
    'vxe-form-gather': {
      Props_span: '',
      'Props_class-name': '给表单项附加 className'
    },
    'vxe-form-item': {
      Props_field: '',
      Props_title: '',
      Props_span: '',
      Props_align: '',
      'Props_title-align': '',
      'Props_title-width': '',
      'Props_title-colon': '是否显示标题冒号',
      'Props_title-asterisk': '是否显示必填字段的红色星号',
      'Props_title-overflow': '',
      'Props_show-title': '是否显示标题',
      Props_vertical: '使用垂直布局',
      'Props_class-name': '给表单项附加 className',
      'Props_content-class-name': '给表单项内容附加 className',
      'Props_content-style': '给表单项内容附加样式',
      Props_visible: '',
      'Props_visible-method': '',
      Props_folding: '',
      'Props_collapse-node': '',
      'Props_title-prefix': '',
      'Props_title-prefix_content': '提示消息（支持开启国际化）',
      'Props_title-prefix_message': '请使用 content',
      'Props_title-prefix_enterable': '只对 message 设置后有效，鼠标是否可进入到 tooltip 中',
      'Props_title-prefix_theme': '只对 message 设置后有效，设置 tooltip 的主题样式',
      'Props_title-prefix_icon': '自定义图标',
      'Props_title-suffix': '',
      'Props_title-suffix_content': '提示消息（支持开启国际化）',
      'Props_title-suffix_message': '请使用 content',
      'Props_title-suffix_enterable': '只对 message 设置后有效，鼠标是否可进入到 tooltip 中',
      'Props_title-suffix_theme': '只对 message 设置后有效，设置 tooltip 的主题样式',
      'Props_title-suffix_icon': '自定义图标',
      'Props_reset-value': '',
      'Props_item-render': '',
      'Props_item-render_name': '渲染器名称',
      'Props_item-render_enabled': '是否启用',
      'Props_item-render_props': '渲染的参数（请查看自定义的 Props）',
      'Props_item-render_options': '只对 name=select 有效，下拉选项列表',
      'Props_item-render_optionProps': '只对 name=select 有效，下拉选项属性参数配置',
      'Props_item-render_optionGroups': '只对 name=select 有效，下拉分组选项列表',
      'Props_item-render_optionGroupProps': '只对 name=select 有效，下拉分组选项属性参数配置',
      'Props_item-render_events': '渲染组件的事件（请查看自定义的 Events）',
      'Props_item-render_content': '渲染组件的内容（仅用于特殊组件）',
      'Props_item-render_defaultValue': '项默认值',
      Slots_default: '自定义表单项',
      Slots_title: '自定义标题'
    },
    'vxe-form-view': {
      Props_modelValue: '',
      Props_config: ''
    },
    'vxe-icon': {
      Props_name: '图标名称',
      Props_status: '状态颜色',
      Props_roll: '旋转动画'
    },
    'vxe-input': {
      Props_modelValue: '',
      Props_size: '',
      Props_type: '渲染类型',
      Props_name: '原生 name 属性',
      Props_form: '原生 form 属性',
      Props_clearable: '当有值时，是否在右侧显示清除按钮',
      Props_placeholder: '当值为空时，显示的占位符',
      Props_autocomplete: '原生 autocomplete 属性',
      Props_maxlength: '原生 maxlength 属性',
      Props_multiple: '只对 type=date|week|month|quarter|year 有效，是否启用多选',
      Props_readonly: '是否只读',
      Props_disabled: '',
      Props_className: '附加 className',
      'Props_prefix-icon': '',
      'Props_suffix-icon': '',
      Props_min: '只对 type=number|integer|float 有效，最小值',
      Props_max: '只对 type=number|integer|float 有效，最大值',
      Props_step: '只对 type=number|integer|float 有效，数字间隔',
      Props_digits: '只对 type=float 有效，小数位数',
      Props_align: '内容对齐方式',
      Props_exponential: '只对 type=number|integer|float 有效，数值是否允许输入科学计数',
      Props_controls: '只对 type=number|integer|float 有效，是否显示控制按钮',
      Props_showWordCount: '只对 type=text|search 有效，是否显示字数统计',
      Props_countMethod: '只对 showWordCount 有效，自定义字数计算方法',
      'Props_start-date': '只对 type=date|datetime|week|month|quarter|year 有效，设置面板起始日期',
      'Props_end-date': '只对 type=date|datetime|week|month|quarter|year 有效，设置面板结束日期',
      'Props_start-week': '即将废弃，请使用 start-day',
      'Props_start-day': '设置每周的起始日期是星期几',
      'Props_select-day': '只对 type=week 有效，设置周视图选中后返回星期几',
      'Props_label-format': '只对 type=date|datetime|week|month|quarter|year 有效，输入框中显示的日期格式',
      'Props_value-format': '只对 type=date|datetime|week|month|quarter|year 有效，绑定值的返回格式，默认返回 Date 类型，如果指定格式则返回字符串',
      Props_editable: '只对 type=date|time|datetime|week|month|quarter|year 有效，文本框是否允许输入',
      'Props_disabled-method': '只对 type=date|datetime|week|month|quarter|year 有效，该方法的返回值用来决定该日期是否允许选中',
      'Props_festival-method': '只对 type=date|datetime|week|month|quarter|year 有效，该方法用于返回对应日期显示的节日',
      Props_transfer: '只对 type=date|time|datetime|week|month|quarter|year 有效，是否将弹框容器插入于 body 内（对于嵌入到表格或者弹窗中被遮挡时需要设置为 true）',
      Slots_prefix: '前缀图标模板',
      Slots_suffix: '后缀图标模板',
      Events_input: '在键盘输入时触发该事件',
      Events_change: '在键盘输入时值发生变化时触发该事件',
      Events_keydown: '在键盘输入按下时触发该事件',
      Events_keyup: '在键盘输入按下弹起时触发该事件',
      Events_click: '在点击输入框时触发该事件',
      Events_focus: '在输入框聚焦时触发该事件',
      Events_blur: '在输入框失焦时触发该事件',
      Events_clear: '在点击右侧清除按钮时触发该事件',
      'Events_search-click': '只对 type=search 有效，在点击右侧搜索按钮时触发该事件',
      'Events_toggle-visible': '只对 type=password 有效，在点击右侧切换按钮时触发该事件',
      'Events_prev-number': '只对 type=number 有效，在点击右侧向上按钮时触发该事件',
      'Events_next-number': '只对 type=number 有效，在点击右侧向下按钮时触发该事件',
      'Events_prefix-click': '在点击头部图标时触发该事件',
      'Events_suffix-click': '在点击尾部图标时触发该事件',
      'Events_date-prev': '只对 type=date|datetime|week|month|year 有效，在点击上一个视图按钮时触发该事件',
      'Events_date-today': '只对 type=date|datetime|week|month|year 有效，在点击到今天视图按钮时触发该事件',
      'Events_date-next': '只对 type=date|datetime|week|month|year 有效，在点击下一个视图按钮时触发该事件',
      Methods_focus: '使输入框获取焦点',
      Methods_blur: '使输入框失去焦点',
      Methods_select: '使输入框选中内容'
    },
    'vxe-layout-aside': {},
    'vxe-layout-body': {},
    'vxe-layout-container': {},
    'vxe-layout-footer': {},
    'vxe-layout-header': {},
    'vxe-link': {},
    'vxe-list-design': {},
    'vxe-list-view': {},
    'vxe-list': {
      Props_data: '',
      Props_size: '',
      Props_loading: '是否加载中',
      Props_height: '列表高度',
      Props_className: '附加 className',
      'Props_auto-resize': '自动监听父元素的变化去重新计算列表（对于父元素可能存在动态变化的场景可能会用到）',
      'Props_sync-resize': '自动跟随某个属性的变化去重新计算列表，和手动调用 recalculate 方法是一样的效果（对于通过某个属性来控制显示/隐藏切换的场景可能会用到）',
      'Props_scroll-y': '纵向虚拟滚动配置',
      'Props_scroll-y_enabled': '是否启用',
      'Props_scroll-y_gt': '指定大于指定行时自动启动纵向虚拟滚动，如果为 0 则总是启用；如果需要关闭，可以设置 enabled 为 false',
      'Props_scroll-y_oSize': '指定每次渲染的数据偏移量，偏移量越大渲染次数就越少，但每次渲染耗时就越久',
      'Props_scroll-y_sItem': '指定行元素的选择器',
      Events_scroll: '列表滚动时会触发该事件',
      Methods_loadData: '加载数据',
      Methods_reloadData: '加载数据并清除所有状态',
      Methods_recalculate: '重新计算列表',
      Methods_scrollTo: '如果有滚动条，则滚动到对应的位置',
      Methods_refreshScroll: '刷新滚动操作，手动同步滚动相关位置',
      Methods_clearScroll: '手动清除滚动相关信息，还原到初始状态'
    },
    'vxe-loading': {},
    'vxe-menu': {},
    'vxe-modal': {
      Props_modelValue: '',
      Props_size: '',
      Props_loading: '',
      Props_id: '',
      Props_title: '',
      Props_type: '',
      Props_status: '',
      Props_className: '给窗口附加 className',
      Props_iconStatus: '',
      Props_content: '',
      Props_message: '',
      'Props_show-cancel-button': '是否显示取消按钮',
      'Props_cancel-button-text': '只对 type=confirm 有效，取消按钮的文本内容',
      'Props_show-confirm-button': '是否显示取消按钮',
      'Props_confirm-button-text': '只对 type=alert|confirm 有效，确定按钮的文本内容',
      Props_showHeader: '',
      Props_showFooter: '',
      'Props_lock-view': '',
      'Props_lock-scroll': '',
      Props_mask: '',
      'Props_mask-closable': '',
      'Props_esc-closable': '',
      'Props_show-zoom': '',
      'Props_show-close': '是否显示关闭按钮',
      Props_resize: '',
      'Props_margin-size': '',
      Props_duration: '',
      Props_width: '',
      Props_height: '',
      'Props_min-width': '',
      'Props_min-height': '',
      Props_top: '',
      Props_position: '',
      Props_position_top: '距离顶部的偏移',
      Props_position_left: '距离左侧的偏移',
      Props_zIndex: '',
      'Props_show-title-overflow': '',
      Props_transfer: '是否将弹框容器插入于 body 内',
      Props_fullscreen: '',
      Props_draggable: '',
      Props_dblclickZoom: '',
      Props_remember: '',
      'Props_destroy-on-close': '',
      Props_storage: '',
      'Props_before-hide-method': '在窗口隐藏之前执行，可以返回 Error 阻止关闭，支持异步',
      Slots_default: '窗口内容模板',
      Slots_header: '窗口头部的模板（如果使用了，则 solt title 无效）',
      Slots_title: '窗口标题的模板',
      Slots_corner: '窗口右上角的模板',
      Slots_footer: '窗口底部的模板',
      Events_show: '在窗口显示时会触发该事件',
      Events_hide: '在窗口隐藏时会触发该事件',
      Events_confirm: '点击确定按钮时会触发该事件',
      Events_cancel: '点击取消按钮时会触发该事件',
      Events_close: '点击关闭按钮时会触发该事件',
      Events_zoom: '窗口缩放时会触发该事件',
      Events_resize: '窗口调整大小时会触发该事件',
      Events_move: '窗口移动时会触发该事件',
      Methods_open: '手动打开窗口',
      Methods_close: '手动关闭窗口',
      Methods_getBox: '获取当前窗口元素',
      Methods_getPosition: '只对 type=modal 有效，获取窗口位置',
      Methods_setPosition: '只对 type=modal 有效，设置窗口位置',
      Methods_isMaximized: '判断是否最大化显示',
      Methods_zoom: '切换窗口最大化/还原',
      Methods_maximize: '如果窗口处于常规状态，则最大化窗口',
      Methods_revert: '如果窗口处于最大化状态，则还原窗口'
    },
    'vxe-number-input': {},
    'vxe-optgroup': {
      Props_label: '',
      Props_visible: '是否显示',
      'Props_class-name': '附加 className',
      Props_disabled: '',
      Slots_default: '自定义选项显示内容模板'
    },
    'vxe-option': {
      Props_value: '',
      Props_label: '',
      Props_visible: '是否显示',
      'Props_class-name': '附加 className',
      Props_disabled: '',
      Slots_default: '自定义选项显示内容模板'
    },
    'vxe-pager': {
      Props_size: '',
      Props_loading: '',
      Props_layouts: '',
      'Props_current-page': '',
      'Props_page-size': '',
      Props_total: '',
      'Props_pager-count': '',
      'Props_page-sizes': '',
      Props_align: '',
      Props_border: '',
      Props_background: '',
      'Props_class-name': '给分页附加 className',
      'Props_auto-hidden': '当只有一页时自动隐藏',
      'Props_icon-prev-page': '',
      'Props_icon-jump-prev': '',
      'Props_icon-jump-next': '',
      'Props_iconnext-page': '',
      'Props_icon-jump-more': '',
      Slots_left: '自定义左侧模板',
      Slots_right: '自定义右侧模板',
      'Events_page-change': '分页发生改变时会触发该事件'
    },
    'vxe-password-input': {},
    'vxe-print': {},
    'vxe-pulldown': {
      Props_modelValue: '',
      Props_size: '',
      'Props_class-name': '给展示容器附加 className',
      'Props_popup-class-name': '给下拉容器附加 className',
      Props_disabled: '',
      Props_placement: '',
      'Props_destroy-on-close': '在下拉容器关闭时销毁内容',
      Props_transfer: '',
      Slots_default: '显示的内容',
      Slots_header: '自定义弹窗容器头部模板',
      Slots_dropdown: '下拉面板显示的内容',
      Slots_footer: '自定义弹窗容器底部模板',
      'Events_hide-panel': '在下拉面板被触发隐藏时触发该事件',
      Methods_isPanelVisible: '判断下拉面板是否可视',
      Methods_togglePanel: '切换下拉面板',
      Methods_showPanel: '显示下拉面板',
      Methods_hidePanel: '隐藏下拉面板'
    },
    'vxe-radio': {
      Props_modelValue: '',
      Props_label: '',
      Props_content: '内容（支持开启国际化）',
      Props_size: '',
      Props_disabled: '',
      Props_strict: '严格模式，选中后不能取消',
      Props_name: '',
      Events_change: '在值发生改变时触发该事件'
    },
    'vxe-radio-button': {
      Props_modelValue: '',
      Props_label: '绑定值',
      Props_content: '显示内容',
      Props_disabled: '是否禁用',
      Props_strict: '严格模式，选中后不能取消'
    },
    'vxe-radio-group': {
      Props_modelValue: '',
      Props_type: '按钮类型',
      Props_size: '',
      Props_disabled: '是否禁用',
      Props_strict: '严格模式，选中后不能取消',
      Props_options: '选项列表',
      'Props_option-props': '选项属性参数配置'
    },
    'vxe-row': {},
    'vxe-select': {
      Props_modelValue: '',
      Props_max: '限制最大可选数量，默认无限制',
      Props_size: '',
      Props_multiple: '',
      'Props_multi-char-overflow': '只对 multiple 有效，设置多选中每个选项显示值的最大字符数，如果超出显示省略号；如果为 -1 则关闭',
      Props_clearable: '',
      Props_placeholder: '',
      'Props_class-name': '给选择器附加 className',
      'Props_popup-class-name': '给下拉容器附加 className',
      Props_visible: '是否显示',
      Props_disabled: '',
      'Props_prefix-icon': '',
      Props_placement: '',
      Props_options: '下拉选项列表',
      'Props_option-props': '下拉选项属性参数配置',
      'Props_option-groups': '下拉分组选项列表',
      'Props_option-group-props': '下拉分组选项属性参数配置',
      'Props_option-config': '选项配置信息',
      'Props_option-config_useKey': '是否需要为每一选项的 VNode 设置 key 属性',
      'Props_option-config_keyField': '自定义选项数据唯一主键的字段名（默认自动生成）',
      'Props_option-id': '已废弃，被 option-config.keyField 替换',
      'Props_option-key': '已废弃，被 option-config.useKey 替换',
      Props_filterable: '是否启用下拉过滤功能',
      'Props_filter-method': '只对 filterable 有效，自定义过滤方法',
      Props_transfer: '',
      Slots_prefix: '自定义前缀图标模板',
      Slots_header: '自定义弹窗容器头部模板',
      Slots_option: '自定义弹窗容器选项模板',
      Slots_footer: '自定义弹窗容器底部模板',
      Events_change: '在值发生改变时触发该事件',
      Events_clear: '在点击右侧清除按钮时触发该事件',
      Events_focus: '在输入框聚焦时触发该事件',
      Events_blur: '在输入框失焦时触发该事件',
      Methods_isPanelVisible: '判断下拉面板是否可视',
      Methods_togglePanel: '切换下拉面板',
      Methods_showPanel: '显示下拉面板',
      Methods_hidePanel: '隐藏下拉面板',
      Methods_refreshOption: '刷新选项（对于动态修改显示/隐藏选项等场景下可能会用到）',
      Methods_focus: '使选择器获取焦点',
      Methods_blur: '使选择器失去焦点'
    },
    'vxe-switch': {
      Props_modelValue: '',
      Props_disabled: '',
      Props_size: '',
      'Props_open-label': '',
      'Props_close-label': '',
      'Props_open-value': '',
      'Props_close-value': '',
      'Props_open-icon': '',
      'Props_close-icon': '',
      'Props_open-active-icon': '自定义打开时动作图标',
      'Props_close-active-icon': '自定义关闭时动作图标',
      Events_change: '值改变时触发该事件'
    },
    'vxe-tab-pane': {},
    'vxe-tabs': {},
    'vxe-textarea': {
      Props_modelValue: '',
      Props_size: '',
      Props_name: '原生 name 属性',
      Props_form: '原生 form 属性',
      Props_placeholder: '当值为空时，显示的占位符',
      Props_className: '附加 className',
      Props_rows: '原生 rows 属性',
      Props_maxlength: '最大长度',
      Props_readonly: '是否只读',
      Props_disabled: '',
      Props_resize: '调整文本域大小的方式',
      Props_autosize: '自适应文本高度',
      Props_autosize_minRows: '最小行',
      Props_autosize_maxRows: '最大行',
      Props_showWordCount: '是否显示字数统计',
      Props_countMethod: '只对 showWordCount 有效，自定义字数计算方法',
      Events_input: '在输入时触发该方法',
      Events_keydown: '在键盘输入按下时触发该事件',
      Events_keyup: '在键盘输入按下弹起时触发该事件',
      Events_change: '在值发生改变时触发该方法',
      Events_focus: '在聚焦时触发该方法',
      Events_blur: '在失焦时触发该方法',
      Methods_focus: '使输入框获取焦点',
      Methods_blur: '使输入框失去焦点'
    },
    'vxe-tip': {
      Props_title: '',
      Props_content: '',
      Props_status: '',
      Props_icon: '',
      Slots_default: '',
      Slots_icon: ''
    },
    'vxe-tooltip': {
      Props_modelValue: '',
      Props_content: '',
      Props_trigger: '',
      Props_theme: '',
      'Props_popup-class-name': '给下拉容器附加 className',
      Props_zIndex: '',
      Props_isArrow: '',
      Props_enterable: '',
      'Props_enter-delay': '',
      Props_leavedelay: '',
      Slots_default: '自定义显示内容模板',
      Methods_open: '手动打开提示框',
      Methods_close: '手动关闭提示框'
    },
    'vxe-tree': {},
    'vxe-tree-select': {},
    'vxe-upload': {}
  }
}
