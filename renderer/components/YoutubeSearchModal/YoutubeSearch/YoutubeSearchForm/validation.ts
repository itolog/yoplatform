import * as Yup from 'yup';

const SearchVideoSchema = Yup.object().shape({
  videoSearch: Yup.string().required('Заполните'),
});

export default SearchVideoSchema;
