/**
 * Định nghĩa trạng thái hoạt động của bản ghi trong dữ liệu
 * DF = Default
 * Dùng khi ADMIN xóa bản ghi
 */
const STATUS_DOC_DF = {
  df: 0, // df = default
  isDeleted: {
    n: 1,
    t: "Deteled",
  },
  isWorking: {
    // Mặc định ở trạng thái này
    n: 0,
    t: "Is Working",
  },
};

/**
 * Định nghĩa trạng thái hiển thị của bản ghi trong dữ liệu
 * DF = Default
 * Dùng khi Quản trị muốn ẩn/hiện bản ghi
 */
const VISIBLE_DOC_DF = {
  df: 1, // df = default
  active: {
    // Mặc định ở trạng thái này
    n: 1,
    t: "Active",
  },
  disabled: {
    n: 0,
    t: "Disable",
  },
};

module.exports = {
  VISIBLE_DOC_DF,
  STATUS_DOC_DF,
};
