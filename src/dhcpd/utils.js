var sprintf;

sprintf = require("./sprintf");

module.exports = {
  /*
    Writes an array with bytes to the packets Buffer from the current position

    @param {Array} byteArray A simple array with uint8 values ([0x00, 0xFF])
    @return {Packet}
  */

  writeBytes: function(_buffer, byteArray, offset) {
    var i, _bytesWritten;
    i = 0;
    while (i < byteArray.length) {
      _buffer[offset++] = byteArray[i];
      i++;
    }
    if (offset > _bytesWritten) {
      _bytesWritten = offset;
    }
    return this;
  },
  /*
    Write a 4-byte integer

    @param {integer} integer The value to write to the packet
    @return {Packet}
  */

  writeInt32: function(_buffer, integer, offset) {
    _buffer[offset++] = integer >>> 24;
    _buffer[offset++] = integer >>> 16;
    _buffer[offset++] = integer >>> 8;
    _buffer[offset++] = integer;
    return offset;
  },
  /*
    Write a 2-byte integer

    @param {integer} integer The value to write to the packet
    @return {Packet}
  */

  writeInt16: function(_buffer, integer, offset) {
    _buffer[offset++] = integer >>> 8;
    _buffer[offset++] = integer;
    return offset;
  },
  /*
    Write a 1-byte integer

    @param {integer} integer The value to write to the packet
    @return {Packet}
  */

  writeInt8: function(_buffer, integer, offset) {
    _buffer[offset++] = integer;
    return offset;
  },
  /*
    Reads the given length of bytes from the packets Buffer
    and optionally (if the copy argument is true) creates a real copy of the Buffer

    @param {Integer} length
    @param {Boolean} copy
    @return {Buffer}
  */

  readBytes: function(_buffer, length, copy, offset) {
    var bufCopy;
    if (copy) {
      bufCopy = new Buffer(length);
      _buffer.copy(bufCopy, 0, offset, (offset += length));
      return bufCopy;
    } else {
      return _buffer.slice(offset, (offset += length));
    }
  },
  /*
    Reads a 4-byte integer from the packet

    @return {Integer}
  */

  readInt32: function(_buffer, offset) {
    return (_buffer[offset++] << 24) | (_buffer[offset++] << 16) | (_buffer[offset++] << 8) | _buffer[offset++];
  },
  /*
    Reads a 2-byte integer from the packet

    @return {Integer}
  */

  readInt16: function(_buffer, offset) {
    return (_buffer[offset++] << 8) | _buffer[offset++];
  },
  /*
    Reads a 1-byte integer from the packet

    @return {Integer}
  */

  readInt8: function(_buffer, offset) {
    return _buffer[offset++];
  },
  readString: function(buf) {
    var j, s;
    s = "";
    j = 0;
    while (j < buf.length) {
      s += String.fromCharCode(buf[j]);
      j++;
    }
    return s;
  },
  readHex: function(buf) {
    var j, s;
    s = "";
    j = 0;
    while (j < buf.length) {
      s += sprintf("%02x", b[j]);
      j++;
    }
    return s;
  },
  readHexAddress: function(buf) {
    var j, s;
    s = [];
    j = 0;
    while (j < buf.length) {
      s.push(sprintf("%02d", buf[j]));
      j++;
    }
    return s.join(":");
  },
  readIp: function(buffer, offset) {
    var stop;
    if (offset === null) {
      offset = 0;
    }
    if(offset > buffer.length){
      return undefined;
    }
    if (0 === buffer.readUInt8(offset)) {
      return undefined;
    } else {
      stop = offset + 4;
      return ((function() {
        var _results;
        _results = [];
        while (offset < stop) {
          _results.push(buffer.readUInt8(offset++));
        }
        return _results;
      })()).join('.');
    }
  },
  readMacAddress: function(buffer) {
    var byte;
    return ((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = buffer.length; _i < _len; _i++) {
        byte = buffer[_i];
        _results.push((byte + 0x100).toString(16).substr(-2));
      }
      return _results;
    })()).join(':');
  },
  writeTimeOffset: function(buf, num, offsetHours, offset) {
    buf[offset++] = 0;
    return offset;
  },
  writeIp: function(buf, num, ip, offset) {
    buf[offset++] = num;
    buf[offset++] = 4;
	if ((typeof ip !== 'string' && !(ip instanceof String)) || ip.indexOf('.') === -1) {
	  ip = "0.0.0.0";
	}
    ip.split(".").forEach(function(item) {
      buf[offset++] = item;
    });
    return offset;
  },
  writeString: function(buf, num, hostname, offset) {
    var charArr;
    charArr = hostname.split("");
    buf[offset++] = num;
    buf[offset++] = charArr.length;
    charArr.forEach(function(chr) {
      buf[offset++] = chr.charCodeAt();
    });
    return offset;
  }
};
