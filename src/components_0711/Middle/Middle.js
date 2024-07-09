import React from 'react';
import { List, ListItem, Paper } from '@mui/material';
import remove from '../assets/bin.png';
import yellow from '../assets/yellow.png';
import snooze from '../assets/snooze.png';
import star from '../assets/star.png';

const Middle = () => {
  return (
    <>
      <Paper elevation={0} style={{ backgroundColor: '#F8FCFF', borderBottom: '1px solid #EFEFEF', borderTop: '1px solid #EFEFEF' }}>
        <ListItem>
          <img src={star} style={{ cursor: 'pointer', width: '1.4vw', height: '1.4vw' }} />
          <span style={{ fontSize: '1.3vw', marginLeft: '1.2vw', fontWeight: '500' }}>
            BAND
            <span style={{ marginLeft: '12vw', fontWeight: '200' }}>[BAND] 새로운 기기에서 로그인 되었습니다.</span>
          </span>
          <img src={snooze} style={{ marginLeft: '1vw', width: '1.3vw', height: '1.3vw', cursor: 'pointer' }} />
          <img src={remove} style={{ width: '1.1vw', height: '1.1vw', marginLeft: '1vw', cursor: 'pointer' }} />
        </ListItem>
        <ListItem>
          <img src={star} style={{ cursor: 'pointer', width: '1.4vw', height: '1.4vw' }} />
          <span style={{ fontSize: '1.3vw', marginLeft: '1.2vw', fontWeight: '500' }}>
            NH투자증권
            <span style={{ marginLeft: '12vw', fontWeight: '200' }}>[2024/07/05] RP매매내역입니다.</span>
          </span>
          <img src={snooze} style={{ marginLeft: '1vw', width: '1.3vw', height: '1.3vw', cursor: 'pointer' }} />
          <img src={remove} style={{ width: '1.1vw', height: '1.1vw', marginLeft: '1vw', cursor: 'pointer' }} />
        </ListItem>
      </Paper>
    </>
  );
};

export default Middle;
