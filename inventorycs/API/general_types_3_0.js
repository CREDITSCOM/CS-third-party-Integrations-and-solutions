//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


Variant = function(args) {
  this.v_bool = null;
  this.v_i8 = null;
  this.v_i16 = null;
  this.v_i32 = null;
  this.v_i64 = null;
  this.v_double = null;
  this.v_string = null;
  this.v_list = null;
  this.v_set = null;
  this.v_map = null;
  if (args) {
    if (args.v_bool !== undefined && args.v_bool !== null) {
      this.v_bool = args.v_bool;
    }
    if (args.v_i8 !== undefined && args.v_i8 !== null) {
      this.v_i8 = args.v_i8;
    }
    if (args.v_i16 !== undefined && args.v_i16 !== null) {
      this.v_i16 = args.v_i16;
    }
    if (args.v_i32 !== undefined && args.v_i32 !== null) {
      this.v_i32 = args.v_i32;
    }
    if (args.v_i64 !== undefined && args.v_i64 !== null) {
      this.v_i64 = args.v_i64;
    }
    if (args.v_double !== undefined && args.v_double !== null) {
      this.v_double = args.v_double;
    }
    if (args.v_string !== undefined && args.v_string !== null) {
      this.v_string = args.v_string;
    }
    if (args.v_list !== undefined && args.v_list !== null) {
      this.v_list = Thrift.copyList(args.v_list, [null]);
    }
    if (args.v_set !== undefined && args.v_set !== null) {
      this.v_set = Thrift.copyList(args.v_set, [null]);
    }
    if (args.v_map !== undefined && args.v_map !== null) {
      this.v_map = Thrift.copyMap(args.v_map, [null]);
    }
  }
};
Variant.prototype = {};
Variant.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.v_bool = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BYTE) {
        this.v_i8 = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I16) {
        this.v_i16 = input.readI16().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.v_i32 = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.v_i64 = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.DOUBLE) {
        this.v_double = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.v_string = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.v_list = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new Variant();
          elem6.read(input);
          this.v_list.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.SET) {
        var _size7 = 0;
        var _rtmp311;
        this.v_set = [];
        var _etype10 = 0;
        _rtmp311 = input.readSetBegin();
        _etype10 = _rtmp311.etype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          var elem13 = null;
          elem13 = new Variant();
          elem13.read(input);
          this.v_set.push(elem13);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.MAP) {
        var _size14 = 0;
        var _rtmp318;
        this.v_map = {};
        var _ktype15 = 0;
        var _vtype16 = 0;
        _rtmp318 = input.readMapBegin();
        _ktype15 = _rtmp318.ktype;
        _vtype16 = _rtmp318.vtype;
        _size14 = _rtmp318.size;
        for (var _i19 = 0; _i19 < _size14; ++_i19)
        {
          if (_i19 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key20 = null;
          var val21 = null;
          key20 = new Variant();
          key20.read(input);
          val21 = new Variant();
          val21.read(input);
          this.v_map[key20] = val21;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Variant.prototype.write = function(output) {
  output.writeStructBegin('Variant');
  if (this.v_bool !== null && this.v_bool !== undefined) {
    output.writeFieldBegin('v_bool', Thrift.Type.BOOL, 1);
    output.writeBool(this.v_bool);
    output.writeFieldEnd();
  }
  if (this.v_i8 !== null && this.v_i8 !== undefined) {
    output.writeFieldBegin('v_i8', Thrift.Type.BYTE, 2);
    output.writeByte(this.v_i8);
    output.writeFieldEnd();
  }
  if (this.v_i16 !== null && this.v_i16 !== undefined) {
    output.writeFieldBegin('v_i16', Thrift.Type.I16, 3);
    output.writeI16(this.v_i16);
    output.writeFieldEnd();
  }
  if (this.v_i32 !== null && this.v_i32 !== undefined) {
    output.writeFieldBegin('v_i32', Thrift.Type.I32, 4);
    output.writeI32(this.v_i32);
    output.writeFieldEnd();
  }
  if (this.v_i64 !== null && this.v_i64 !== undefined) {
    output.writeFieldBegin('v_i64', Thrift.Type.I64, 5);
    output.writeI64(this.v_i64);
    output.writeFieldEnd();
  }
  if (this.v_double !== null && this.v_double !== undefined) {
    output.writeFieldBegin('v_double', Thrift.Type.DOUBLE, 6);
    output.writeDouble(this.v_double);
    output.writeFieldEnd();
  }
  if (this.v_string !== null && this.v_string !== undefined) {
    output.writeFieldBegin('v_string', Thrift.Type.STRING, 7);
    output.writeString(this.v_string);
    output.writeFieldEnd();
  }
  if (this.v_list !== null && this.v_list !== undefined) {
    output.writeFieldBegin('v_list', Thrift.Type.LIST, 8);
    output.writeListBegin(Thrift.Type.STRUCT, this.v_list.length);
    for (var iter22 in this.v_list)
    {
      if (this.v_list.hasOwnProperty(iter22))
      {
        iter22 = this.v_list[iter22];
        iter22.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.v_set !== null && this.v_set !== undefined) {
    output.writeFieldBegin('v_set', Thrift.Type.SET, 9);
    output.writeSetBegin(Thrift.Type.STRUCT, this.v_set.length);
    for (var iter23 in this.v_set)
    {
      if (this.v_set.hasOwnProperty(iter23))
      {
        iter23 = this.v_set[iter23];
        iter23.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.v_map !== null && this.v_map !== undefined) {
    output.writeFieldBegin('v_map', Thrift.Type.MAP, 10);
    output.writeMapBegin(Thrift.Type.STRUCT, Thrift.Type.STRUCT, Thrift.objectLength(this.v_map));
    for (var kiter24 in this.v_map)
    {
      if (this.v_map.hasOwnProperty(kiter24))
      {
        var viter25 = this.v_map[kiter24];
        kiter24.write(output);
        viter25.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MethodArgument = function(args) {
  this.type = null;
  this.name = null;
  if (args) {
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
  }
};
MethodArgument.prototype = {};
MethodArgument.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MethodArgument.prototype.write = function(output) {
  output.writeStructBegin('MethodArgument');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 1);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MethodDescription = function(args) {
  this.returnType = null;
  this.name = null;
  this.arguments = null;
  if (args) {
    if (args.returnType !== undefined && args.returnType !== null) {
      this.returnType = args.returnType;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.arguments !== undefined && args.arguments !== null) {
      this.arguments = Thrift.copyList(args.arguments, [MethodArgument]);
    }
  }
};
MethodDescription.prototype = {};
MethodDescription.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.returnType = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size26 = 0;
        var _rtmp330;
        this.arguments = [];
        var _etype29 = 0;
        _rtmp330 = input.readListBegin();
        _etype29 = _rtmp330.etype;
        _size26 = _rtmp330.size;
        for (var _i31 = 0; _i31 < _size26; ++_i31)
        {
          var elem32 = null;
          elem32 = new MethodArgument();
          elem32.read(input);
          this.arguments.push(elem32);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MethodDescription.prototype.write = function(output) {
  output.writeStructBegin('MethodDescription');
  if (this.returnType !== null && this.returnType !== undefined) {
    output.writeFieldBegin('returnType', Thrift.Type.STRING, 1);
    output.writeString(this.returnType);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.arguments !== null && this.arguments !== undefined) {
    output.writeFieldBegin('arguments', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.arguments.length);
    for (var iter33 in this.arguments)
    {
      if (this.arguments.hasOwnProperty(iter33))
      {
        iter33 = this.arguments[iter33];
        iter33.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

APIResponse = function(args) {
  this.code = null;
  this.message = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
APIResponse.prototype = {};
APIResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BYTE) {
        this.code = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

APIResponse.prototype.write = function(output) {
  output.writeStructBegin('APIResponse');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.BYTE, 1);
    output.writeByte(this.code);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

