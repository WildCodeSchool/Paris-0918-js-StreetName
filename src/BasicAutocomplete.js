import React, { Component } from 'react';
import Downshift from 'downshift';

function BasicAutocomplete({ defaultSelectedItem, itemToString, items, onChange, refine, badge, renderItem, getText }) {
  const defaultInputValue = defaultSelectedItem? getText(defaultSelectedItem) : undefined;
  return (
    <Downshift
      onChange={onChange}
      itemToString={itemToString}
      selectedItem={defaultSelectedItem}
      render={({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex,
      }) => (
          <div>
            <input {...getInputProps({
              placeholder: defaultInputValue || 'Write something',
              onChange(e) {
                refine(e.target.value)
              },
            }) } />
            {isOpen ? (
              <div>
                <ul style={{ border: '1px solid #ccc' }}>
                  {items
                    .filter(
                    i =>
                      !inputValue ||
                      getText(i).toLowerCase().includes(inputValue.toLowerCase()),
                  )
                    .map((item, index) => (
                      <li
                        {...getItemProps({ item }) }
                        key={item.id}
                        style={{
                          backgroundColor:
                          highlightedIndex === index ? 'gray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        }}
                      >
                        {renderItem(item)}
                      </li>
                    ))}
                </ul>
                <span>{badge}</span>
              </div>
            ) : null}
          </div>
        )}
    />
  )
}


export default BasicAutocomplete;