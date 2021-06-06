<a name="Dropdown"></a>

## Dropdown
**Kind**: global class

* [Dropdown](#Dropdown)
    * [new exports.Dropdown(items, multiple, label, helper, err, searchable, toggleItem, size, loading)](#new_Dropdown_new)
    * [~multipleSelected()](#Dropdown..multipleSelected) ⇒ <code>JSX.Element</code> \| <code>Array.&lt;unknown&gt;</code>
    * [~singlePicked(obj)](#Dropdown..singlePicked)
    * [~multiplePicked(sts, obj)](#Dropdown..multiplePicked)
    * [~singleListItems()](#Dropdown..singleListItems) ⇒ <code>Array.&lt;unknown&gt;</code>
    * [~multipleListItems()](#Dropdown..multipleListItems) ⇒ <code>Array.&lt;unknown&gt;</code>
    * [~toggleList()](#Dropdown..toggleList)
    * [~filterFunction(v)](#Dropdown..filterFunction)
    * [~setDefaultItems(items)](#Dropdown..setDefaultItems)

<a name="new_Dropdown_new"></a>

### new exports.Dropdown(items, multiple, label, helper, err, searchable, toggleItem, size, loading)
A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list


| Param | Type | Description |
| --- | --- | --- |
| items | <code>array</code> | array include id, title and some one |
| multiple | <code>boolean</code> | User can be select multiple item |
| label | <code>string</code> | Label for dropdown |
| helper | <code>string</code> | Show helper message |
| err | <code>string</code> | Show invalid feedback |
| searchable | <code>boolean</code> | Show input for search between items |
| toggleItem | <code>function</code> | Callback selected item |
| size | <code>string</code> | one of the xs, sm, lg |
| loading | <code>boolean</code> | show loading |

<a name="Dropdown..multipleSelected"></a>

### Dropdown~multipleSelected() ⇒ <code>JSX.Element</code> \| <code>Array.&lt;unknown&gt;</code>
Show selected item in dropdown

**Kind**: inner method of [<code>Dropdown</code>](#Dropdown)  
<a name="Dropdown..singlePicked"></a>

### Dropdown~singlePicked(obj)
Show selected item close dropdown

**Kind**: inner method of [<code>Dropdown</code>](#Dropdown)

| Param | Type |
| --- | --- |
| obj | <code>unknown</code> | 

<a name="Dropdown..multiplePicked"></a>

### Dropdown~multiplePicked(sts, obj)
**Kind**: inner method of [<code>Dropdown</code>](#Dropdown)

| Param | Type | Description |
| --- | --- | --- |
| sts | <code>boolean</code> | If is true, add to selected list else removed from them |
| obj | <code>unknown</code> |  |

<a name="Dropdown..singleListItems"></a>

### Dropdown~singleListItems() ⇒ <code>Array.&lt;unknown&gt;</code>
Generate single mode list

**Kind**: inner method of [<code>Dropdown</code>](#Dropdown)  
<a name="Dropdown..multipleListItems"></a>

### Dropdown~multipleListItems() ⇒ <code>Array.&lt;unknown&gt;</code>
Generate multiple mode list

**Kind**: inner method of [<code>Dropdown</code>](#Dropdown)  
<a name="Dropdown..toggleList"></a>

### Dropdown~toggleList()
Open/Close list

**Kind**: inner method of [<code>Dropdown</code>](#Dropdown)  
<a name="Dropdown..filterFunction"></a>

### Dropdown~filterFunction(v)
Filter item from list

**Kind**: inner method of [<code>Dropdown</code>](#Dropdown)

| Param | Type |
| --- | --- |
| v | <code>string</code> | 

<a name="Dropdown..setDefaultItems"></a>

### Dropdown~setDefaultItems(items)
In component did mount set selected items

**Kind**: inner method of [<code>Dropdown</code>](#Dropdown)

| Param | Type |
| --- | --- |
| items | <code>array</code> | 

