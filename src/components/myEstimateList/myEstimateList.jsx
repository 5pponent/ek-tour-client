import React from 'react';
import styles from './myEstimateList.module.css';
import SubHeader from '../subHeader/subHeader';
import EstimateListItem from '../estimateListItem/estimateListItem';
import { Box, Pagination, Stack } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MyEstimateList = ({ ektour }) => {

  const navigate = useNavigate();
  const { page } = useParams(1);

  const location = useLocation();
  const form = location.state;

  const handleChangePage = (event, value) => {
    navigate('/estimate/my/list/' + value);
  }

  return (
    <>
      <section className={styles.myEstimateList}>
        <SubHeader menu='내 견적 목록' />
        <Box>
          <div className={styles.dataList}>
            <span className={styles.id}>순번</span>
            <span className={styles.name}>등록자</span>
            <span className={styles.travelType}>여행구분</span>
            <span className={styles.departPlace}>출발지</span>
            <span className={styles.arrivalPlace}>도착지</span>
            <span className={styles.vehicleType}>차량구분</span>
            <span className={styles.createdDate}>요청일</span>
          </div>
          {/* {
            requestDataList ? requestDataList.map((e) => {
              return (
                <EstimateListItem 
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  travelType={e.travelType}
                  departPlace={e.departPlace}
                  arrivalPlace={e.arrivalPlace}
                  vehicleType={e.vehicleType}
                  createdDate={e.createdDate}
                />
              );
            }) :
            <Box p={5}>
              견적 요청 내역이 없습니다.
            </Box>
          } */}
          <Stack spacing={0} m={1}>
            <Pagination
              count={1} 
              shape='rounded' 
              size='small'
              onChange={handleChangePage} 
              sx={{ margin: '0 auto' }}
            />
          </Stack>
        </Box>
      </section>
    </>
  )
};

export default MyEstimateList;