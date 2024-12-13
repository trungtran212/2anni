/**
 * Được tạo bởi Rychou vào ngày 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // Nhúng tệp nhạc nền


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2022, 12, 12) // Ngày kỷ niệm của các bạn
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 10) // Nhạc nền sẽ bắt đầu phát sau khi trang tải xong, độ trễ tính bằng mili giây.
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // Thay thế các khoảng trắng dư thừa giữa các dòng mã, không loại bỏ các dòng mới sẽ có sự gián đoạn rõ ràng: thực chất là đang in ra nhiều khoảng trắng
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // In ra thẻ HTML đầy đủ, ví dụ: <p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                // Dùng toán tử bitwise: Dựa vào việc setInterval chạy số lần chẵn lẻ để quyết định có thêm ký tự gạch dưới “_”, làm cho hiệu ứng gõ chữ trở nên thật hơn.
                if (index < str.length - 1) { // In ký tự trước ký tự cuối cùng, không thêm gạch dưới để tránh việc ký tự kết thúc có thể thêm dấu gạch dưới
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 40)
            };
            // Bắt đầu sau 1 giây
            setTimeout(timer, 200);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>Anh đã bị bắt nạt: <span className="date-text">{d}</span> ngày <span className="date-text">{hour}</span> giờ <span className="date-text">{minute}</span> phút <span className="date-text">{second}</span> giây </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 400, fontSize: 22 }}>Chào em! Hà Mã của anh!</h1>
                    <p style={{fontSize: 20}}>Hôm nay là kỷ niệm hai năm của chúng ta, từ ngày 12 tháng 12 năm 2022 đến nay, chúng ta đã cùng nhau trải qua rất nhiều điều, có niềm vui, cũng có tranh cãi, đã từng vì một số chuyện mà suýt chia tay, nhưng cuối cùng chúng ta vẫn bên nhau.</p>
                    <p style={{fontSize: 20}}>Hai năm qua, chúng ta đã cùng nhau trải qua bao nhiêu kỷ niệm, 
                        từ những ngày tháng đầu tiên đầy ngọt ngào, những khoảnh khắc mà trái tim anh 
                        đập nhanh mỗi khi nhìn thấy em, cho đến những thử thách mà chúng ta vượt qua 
                        cùng nhau. Anh nhớ những ngày bên em, những buổi sáng anh chuẩn bị bữa sáng cho 
                        em, những lúc chúng ta ngồi ăn cùng nhau, mặc dù em rất hay nhăn nhó, khó tính nhưng 
                        anh chỉ muốn được ở cạnh em, cảm nhận 
                        tình yêu từng chút một. Chúng ta đã cùng nhau cười, cùng nhau khóc, cùng nhau 
                        vượt qua những lúc khó khăn. Em là người anh yêu nhất, là người anh không thể 
                        tưởng tượng cuộc sống thiếu em. Em đã làm cho cuộc sống của anh trở nên tuyệt vời 
                        hơn bao giờ hết. Hôm nay, nhân dịp kỷ niệm hai năm, anh muốn nói rằng anh yêu em 
                        hơn bao giờ hết, và cảm ơn em vì đã ở bên anh, vì đã cùng anh tạo nên những kỷ 
                        niệm đẹp đẽ này. Anh hy vọng sẽ tiếp tục cùng em đi qua nhiều năm tháng nữa, xây 
                        dựng những giấc mơ, những kế hoạch cho tương lai. Chúc mừng kỷ niệm hai năm của chúng 
                        ta, và anh mong rằng chúng ta sẽ luôn giữ được tình yêu này, vững vàng vượt qua mọi thử 
                        thách và cùng nhau tạo dựng một cuộc sống thật đẹp. Anh yêu em rất nhiều!</p>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{fontSize: 20}}>Yêu em rất nhiều ♥ Trung Đẹp Trai</p>
                        <p style={{fontSize: 20}}>Ngày 12 tháng 12 năm 2024</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main
