namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fixProfileTable : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Address_Book", name: "User_Id", newName: "ApplicationUserId");
            RenameColumn(table: "dbo.UserProfiles", name: "User_Id", newName: "ApplicationUserId");
            RenameIndex(table: "dbo.Address_Book", name: "IX_User_Id", newName: "IX_ApplicationUserId");
            RenameIndex(table: "dbo.UserProfiles", name: "IX_User_Id", newName: "IX_ApplicationUserId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.UserProfiles", name: "IX_ApplicationUserId", newName: "IX_User_Id");
            RenameIndex(table: "dbo.Address_Book", name: "IX_ApplicationUserId", newName: "IX_User_Id");
            RenameColumn(table: "dbo.UserProfiles", name: "ApplicationUserId", newName: "User_Id");
            RenameColumn(table: "dbo.Address_Book", name: "ApplicationUserId", newName: "User_Id");
        }
    }
}
