//FLORI
import Chart from '../../components/Chart/Chart';
import StatisticsDashboard from '../../components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from '../../components/StatisticsTable/StatisticsTable';

import s from './StatisticsTab.module.css';

const StatisticsTab = () => {
  return (
    <div className={s.statisticsWrapper}>
      <div className={s.doughnutWrapper}>
        <h1 className={s.header}>Statistics</h1>
        <Chart />
      </div>
      <div className={s.tableWrapper}>
        <StatisticsDashboard />
        <StatisticsTable />
      </div>
    </div>
  );
};

export default StatisticsTab;
