import React from "react";
import {Dropdown} from "./Dropdown";

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
};
const INITIAL_ITEM = [
    {
        id: "1",
        title: "سبز",
        provinceId: "cb865f5f-7358-4452-b329-b19c56e4e201",
        default: false,
    }, {
        id: "2",
        title: "قرمز",
        provinceId: "cb865f5f-7358-4452-b329-b19c56e4e201",
        default: true,
    }, {
        id: "3",
        title: "آبی",
        provinceId: "cb865f5f-7358-4452-b329-b19c56e4e201",
        default: false,
    }, {
        id: "4",
        title: "زرد",
        provinceId: "cb865f5f-7358-4452-b329-b19c56e4e201",
        default: false,
    }, {
        id: "5",
        title: "صورتی",
        provinceId: "cb865f5f-7358-4452-b329-b19c56e4e201",
        default: false,
    }, {
        id: "6",
        title: "نارنجی",
        provinceId: "cb865f5f-7358-4452-b329-b19c56e4e201",
        default: false,
    }]

export const multipleSelectDropdown = () => <div style={{width: 400, float: 'right'}}><Dropdown items={INITIAL_ITEM} searchable={['جستجو کنید','چیزی یافت نشد']} multiple label="انتخاب کنید"
                                             helper="حداقل یک آیتم را انتخاب کنید"
                                             toggleItem={v => console.log("toggleItem", v)}
                                             size={`sm`}
                                             /></div>

export const singleSelectDropdown = () => <div style={{width: 400, float: 'right'}}><Dropdown items={INITIAL_ITEM} label="انتخاب کنید"
                                                                  helper="حداقل یک آیتم را انتخاب کنید"
                                                                  toggleItem={v => console.log("toggleItem", v)}
                                                                  size={`sm`}
                                                                  /></div>
