import { format, getDate } from 'date-fns';
import ReactCalendar from 'react-calendar';
import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';
import 'react-calendar/dist/Calendar.css';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div`
  display: flex;
  justify-content: center;

  .react-calendar {
    width: 100%;
    max-width: ${props => props.theme.maxDeviceWidth};
    min-width: ${props => props.theme.minDeviceWidth};
    margin-top: 30px;
    border: 0;
    font-family: ${props => props.theme.fontFamilies.inner};
    font-weight: normal;
  }

  .react-calendar__month-view__weekdays {
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 3px;
    text-align: center;
    color: ${props => props.theme.colors.placeholder};

    abbr {
      text-decoration: none !important;
    }
  }

  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: transparent;
  }

  button {
    padding: 1em 0;
    font-size: 22px;
    font-weight: normal;
    color: ${props => props.theme.colors.placeholder} !important;

    &.highlight {
      position: relative;
      color: ${props => props.theme.colors.primary} !important;

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        bottom: 5px;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        border-radius: 50%;
        background: ${props => props.theme.colors.primary};
      }
    }
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #ffffff;
  }
`;

function Calendar({ items }: Props) {
  const mark = items.map(x => x.name);
  return (
    <Layout>
      <ReactCalendar
        formatDay={(_, date) => getDate(date).toString()}
        calendarType="gregory"
        goToRangeStartOnSelect={false}
        showNavigation={false}
        showNeighboringMonth={false}
        tileClassName={({ date }) => {
          if (mark.find(x => x === format(date, 'yyyy-MM-dd'))) {
            return 'highlight';
          }
          return undefined;
        }}
      />
    </Layout>
  );
}

export default Calendar;
