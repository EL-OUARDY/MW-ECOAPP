namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class setDatePropertyToUTC2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Last_Update", c => c.DateTimeOffset(precision: 7));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "Last_Update");
        }
    }
}
