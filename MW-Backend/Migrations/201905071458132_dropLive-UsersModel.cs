namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dropLiveUsersModel : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Connections", "UserName", "dbo.Live_User");
            DropIndex("dbo.Connections", new[] { "UserName" });
            AlterColumn("dbo.Connections", "UserName", c => c.String());
            DropTable("dbo.Live_User");
        }
        
        public override void Down()
        {
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
        }
    }
}
