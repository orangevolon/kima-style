import Vue from "vue";

// common
import Action from "@/components/common/Action";
import ActionGroup from "@/components/common/ActionGroup";
import Errors from "@/components/common/Errors";
import Icon from "@/components/common/Icon";
import Logo from "@/components/common/Logo";
import Table from "@/components/common/Table";
import TableCell from "@/components/common/TableCell";
import TableRow from "@/components/common/TableRow";
import Waiter from "@/components/common/Waiter";

// form
import Form from "@/components/form/Form";
import FormField from "@/components/form/FormField";
import FormFile from "@/components/form/FormFile";
import FormText from "@/components/form/FormText";

Vue.component("ks-action", Action);
Vue.component("ks-action-group", ActionGroup);
Vue.component("ks-errors", Errors);
Vue.component("ks-icon", Icon);
Vue.component("ks-logo", Logo);
Vue.component("ks-table", Table);
Vue.component("ks-table-cell", TableCell);
Vue.component("ks-table-row", TableRow);
Vue.component("ks-waiter", Waiter);
Vue.component("ks-form", Form);
Vue.component("ks-form-field", FormField);
Vue.component("ks-form-file", FormFile);
Vue.component("ks-form-text", FormText);
