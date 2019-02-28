namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ApplicationUserIdToOrder : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Orders", name: "User_Id", newName: "ApplicationUserId");
            RenameIndex(table: "dbo.Orders", name: "IX_User_Id", newName: "IX_ApplicationUserId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Orders", name: "IX_ApplicationUserId", newName: "IX_User_Id");
            RenameColumn(table: "dbo.Orders", name: "ApplicationUserId", newName: "User_Id");
        }
    }
}
