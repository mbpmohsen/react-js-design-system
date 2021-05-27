import React, {useEffect, useRef, useState} from "react";
import {arrowIcon, searchIcon} from "../../styles/img/icons";
import {Checkbox} from "../Checkbox/Checkbox";
import {Loading} from "../Loading/Loading";
import PropTypes from "prop-types";
import "./dropdown.css";

export const Dropdown = ({
                             items,
                             multiple,
                             label,
                             helper,
                             err,
                             searchable,
                             toggleItem,
                             size,
                             loading
                         }) => {
    const listItemsRef = useRef();
    const wrapperRef = useRef();
    const [flag, dispatchFlag] = useState(false);
    const [singleSelect, setSingleSelect] = useState();
    const [multipleSelect, setMultipleSelect] = useState([]);
    const dropdownSize = 'dropdown--' + size;

    if (multipleSelect)
        toggleItem(multipleSelect)

    function multipleSelected() {
        let length = multipleSelect.length;
        if (length < 3) {
            return (multipleSelect.map((item, index) => (
                <div className={['multiple-picked', size].join(" ")} key={index}>{item.title}</div>
            )))
        } else {
            return (
                <>
                    <div className={['multiple-picked', size].join(" ")}>{multipleSelect[0].title}</div>
                    <div>...</div>
                    <div className={['multiple-picked', size].join(" ")}>{multipleSelect[length - 1].title}</div>
                </>
            )
        }
    }

    function singlePicked(obj) {
        toggleItem([obj]);
        setSingleSelect(obj);
        dispatchFlag(!flag);
    }

    function multiplePicked(sts, obj) {
        if (sts)
            setMultipleSelect(es => es.concat(obj));
        else
            setMultipleSelect(multipleSelect.filter(item=> item.id !== obj.id))
    }

    function singleListItems() {
        return (items.map((item, index) => (
            <button key={index} className={['dropdown-list--item', size].join(" ")} type="button"
                    onClick={() => singlePicked(item)}>
                <div className={['item-text', size].join(" ")}>{item.title}</div>
            </button>
        )))
    }

    function multipleListItems() {
        return (items.map((item, index) => (
            <button key={index} className={['dropdown-list--item', size].join(" ")} type="button">
                <Checkbox onClick={e => multiplePicked(e.target.checked, item)} size={size} label={item.title}/>
            </button>
        )))
    }

    function toggleList() {
        dispatchFlag(!flag)
    }

    function filterFunction(v) {
        for (let value of listItemsRef.current.children) {
            let txtContent = value.textContent;
            if (txtContent.indexOf(v) > -1) {
                value.style.display = "";
            } else {
                value.style.display = "none";
            }
        }
    }

    function setDefaultItems(items) {
        for (let item of Object.values(items)) {
            console.log("Item", item)
            if (item.default) {
                if (multiple) {
                    setMultipleSelect((es) => es.concat(item))
                } else {
                    setSingleSelect(item)
                }
            }
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                dispatchFlag(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    useEffect(() => {
        // eslint-disable-next-line no-undef
        setDefaultItems(items);
    }, [])
    return (
        <div className={`dropdown-wrapper`} ref={wrapperRef}>
            <button className={['dropdown', dropdownSize, size].join(" ")} type={`button`} onClick={() => toggleList()}>
                <div className={['dropdown--label', size].join(" ")}>{label}</div>
                {multiple ? <div className={`multiple-box`}>{multipleSelected()}</div> :
                    <div className={['single-picked', size].join(" ")}>{singleSelect ? singleSelect.title : null}</div>}
                <div className={flag ? 'arrow-down' : 'arrow-up'}>{arrowIcon}</div>
            </button>
            {flag && (
                <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                    {searchable && (
                        <div className={`search-box`}>
                            <input
                                className={`search-input`}
                                placeholder={searchable[0]}
                                onChange={e => filterFunction(e.target.value)}
                                autoFocus
                            />
                            <div className="search-icon">{searchIcon}</div>
                        </div>
                    )}
                    {loading ? <div className={loading}><Loading/></div> :
                        <div className={`scroll-list`} ref={listItemsRef}>
                            {multiple ? multipleListItems() : singleListItems()}
                        </div>
                    }
                </div>
            )}
            {helper && <div className={['helper', size].join(" ")}>{helper}</div>}
            {err && <div className={`err`}>{err}</div>}
        </div>
    )
}

Dropdown.propTypes = {
    /** An array of items for show in the list */
    items: PropTypes.array,
    /** Flag for show checkbox inside any item */
    multiple: PropTypes.bool,
    /** Drop list label */
    label: PropTypes.string,
    /** Help text, Is displayed below the list */
    helper: PropTypes.string,
    /** Error text , Is displayed below the list and change border color */
    err: PropTypes.string,
    /** Flag for show filter input */
    searchable: PropTypes.bool,
    /** Get selected items from component */
    toggleItem: PropTypes.func,
    /** Change component size */
    size: PropTypes.oneOf(["xs", "sm", "lg"]),
    /** Show loading */
    loading: PropTypes.bool,

};

Dropdown.defaultProps = {
    items: [],
    multiple: false,
    label: `انتخاب کنید`,
    helper: "",
    err: "",
    searchable: false,
    toggleItem: () => {
    },
    size: `sm`,
    loading: false
};