import {Icons} from 'assets/icons';
import RN from 'components/RN';
import UI from 'components/UI';
import {COLORS} from 'constants/colors';
import DateHelper from 'helpers/date/DateHelper';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {styles} from './TimetoOver.styles';
type Props = {
  timeToOver: string;
};
const TimeToOver: FC<Props> = ({timeToOver}) => {
  const [currentDate, setCurrentDate] = useState<string>(
    DateHelper.getRemainingTime(new Date(timeToOver).getTime() - Date.now()),
  );

  const runTimer = useCallback(() => {
    const currentTime = new Date(timeToOver).getTime() - Date.now();
    setCurrentDate(DateHelper.getRemainingTime(currentTime));
  }, [timeToOver]);

  useEffect(() => {
    const interval = setInterval(() => {
      runTimer();
    }, DateHelper._ms);

    return () => clearInterval(interval);
  }, [runTimer, timeToOver]);

  return (
    <RN.View>
      <RN.View style={styles.timeToOver}>
        <Icons.TimeIcon width={13} />
        <UI.Text
          title="time to over"
          style={styles.timeToOverTitle}
          type="boldSmall"
        />
      </RN.View>
      <RN.View style={styles.bottomTimeToover}>
        <UI.Text
          title={currentDate}
          style={{color: COLORS.lightgrey}}
          type="regularCaption1"
        />
      </RN.View>
    </RN.View>
  );
};

export default TimeToOver;
