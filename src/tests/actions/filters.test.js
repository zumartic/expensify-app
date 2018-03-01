import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate sortByDate action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate set text filter text value action object', () => {
    const text = 'Test text filter';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'EDIT_TEXT',
        text
    });
});

test('should generate set text filter default empty value action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'EDIT_TEXT',
        text: ''
    });
});