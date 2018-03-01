class Timer{
	countdown(end,update,handle) {
		const now = new Date().getTime();
		const self = this;
		if(now-end){
			handle.call(self);
		}else {
			let last_time = end-now;
			const px_s = 1000;
			const px_m = 1000*60;
			const px_h = 1000*60*60;
			const px_d = px_h*24;
			let d = math.floor(last_time/px_d);
			let h = math.floor((last_time-px_d*d)/px_h);
			let m = math.floor((last_time-px_d*d-px_h*h)/px_m);
			let s = math.floor((last_time-px_d*d-px_h*h-px_m*m)/px_s);
			let r = [];
			if(d>0) {
				r.push(`<em>${d}</em>天`);
			}
			if(r.length||(h>0)) {
				r.push(`<em>${h}</em>时`)
			}
			if(r.length||(m>0)) {
				r.push(`<em>${m}</em>分`)
			}
			if(r.length||(s>0)) {
				r.push(`<em>${s}</em>秒`)
			}
			self.last_time = r.join();
			update.call(self,r.join(''));
			setTimeout(function(){
				self.countdown(end,update,handle);
			},1000)
		}
	}
}