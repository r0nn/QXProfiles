var obj = {
  error: 0,
  data: {
    error_msg: "",
    is_success: true,
    user_info: {
      reg_time: "1663124816",
      is_vip: "9A0684792021D73BE42B71491469ADFA",
      member_state: 1,
      expired_time: 1800000000,
    },
    error_code: "",
    data_info: []
  }
};

$done({ body: JSON.stringify(obj) });
