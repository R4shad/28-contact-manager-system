import { DataTypes, Model } from 'sequelize'
import { sequelize } from './../database/database'

export class Contact extends Model {
  declare id: string
  declare name: string
  declare email: string
  declare phone: number
}

Contact.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Contact',
    updatedAt: false,
  }
)
