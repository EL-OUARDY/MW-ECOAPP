namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addLiveUsersModel : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Connections", "UserProfile_Id", "dbo.UserProfiles");
            DropIndex("dbo.Connections", new[] { "UserProfile_Id" });
            CreateTable(
                "dbo.Live_User",
                c => new
                    {
                        UserName = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.UserName);
            
            AlterColumn("dbo.Connections", "UserName", c => c.String(maxLength: 128));
            CreateIndex("dbo.Connections", "UserName");
            AddForeignKey("dbo.Connections", "UserName", "dbo.Live_User", "UserName");
            DropColumn("dbo.Connections", "UserProfile_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Connections", "UserProfile_Id", c => c.Int());
            DropForeignKey("dbo.Connections", "UserName", "dbo.Live_User");
            DropIndex("dbo.Connections", new[] { "UserName" });
            AlterColumn("dbo.Connections", "UserName", c => c.String());
            DropTable("dbo.Live_User");
            CreateIndex("dbo.Connections", "UserProfile_Id");
            AddForeignKey("dbo.Connections", "UserProfile_Id", "dbo.UserProfiles", "Id");
        }
    }
}
