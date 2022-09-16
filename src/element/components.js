// 引入的外部组件
import Vue from 'vue'
import {
  Carousel, CarouselItem, Button, Popover, Form, FormItem, Input, Col, Select, Option, CheckboxGroup, Checkbox, MessageBox,
  Message,Pagination
} from 'element-ui';
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Button.name, Button);
Vue.component(Popover.name, Popover);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Col.name, Col);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Pagination.name, Pagination);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;