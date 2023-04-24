import { Select } from 'antd';
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const App = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: '*SALE*',
        label: '*Sale*',
      },
      {
        value: 'Attīrīšana',
        label: 'Attīrīšana',
      },
      {
        value: 'Dāvanas',
        label: 'Dāvanas',
      },
      {
        value: 'Ķermenim',
        label: 'Ķermenim',
      },
      {
        value: 'Kremi',
        label: 'Kremi',
      },
      {
        value: 'Lokālā iedarbība',
        label: 'Lokālā iedarbība',
      },
      {
        value: 'Lūpām',
        label: 'Lūpām',
      },
      {
        value: 'Make up',
        label: 'Make up',
      },
      {
        value: 'Maskas',
        label: 'Maskas',
      },
      {
        value: 'Matiem',
        label: 'Matiem',
      },
      {
        value: 'Patči',
        label: 'Patči',
      },
      {
        value: 'Pīlingi un skrubji',
        label: 'Pīlingi un skrubji',
      },
      {
        value: 'Serumi',
        label: 'Serumi',
      },
      {
        value: 'Toneri',
        label: 'Toneri',
      },
    ]}
  />
);
export default App;
